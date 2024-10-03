import { promises } from 'fs'
import { join } from 'path'
import fetch from 'node-fetch'
import { xpRange } from '../lib/levelling.js'
import axios from 'axios';

let Styles = (text, style = 1) => {
  var xStr = 'abcdefghijklmnopqrstuvwxyz1234567890'.split('');
  var yStr = Object.freeze({
    1: 'ᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘqʀꜱᴛᴜᴠᴡxʏᴢ1234567890'
  });
  var replacer = [];
  xStr.map((v, i) => replacer.push({
    original: v,
    convert: yStr[style].split('')[i]
  }));
  var str = text.toLowerCase().split('');
  var output = [];
  str.map(v => {
    const find = replacer.find(x => x.original == v);
    find ? output.push(find.convert) : output.push(v);
  });
  return output.join('');
};

let tags = {
  'main': 'ɪɴꜰᴏ ʙᴏᴛ',
  'buscador': 'ʙᴜꜱQᴜᴇᴅᴀꜱ',
  'search': 'ꜱᴇᴀʀᴄʜ',
  'game': 'ᴅɪᴠᴇʀꜱɪᴏɴ',
  'jadibot': 'ꜱᴜʙ ʙᴏᴛꜱ',
  'rpg': 'ʀᴘɢ',
  'rg': 'ʀᴇɢɪꜱᴛʀᴏ',
  'xp': 'ᴇxᴘ',
  'sticker': 'ꜱᴛɪᴄᴋᴇʀꜱ',
  'anime': 'ᴀɴɪᴍᴇꜱ',
  'database': 'ᴅᴀᴛᴀʙᴀꜱᴇ',
  'fix': 'ꜰɪxᴍꜱɢᴇꜱᴘᴇʀᴀ',
  'grupo': 'ɢʀᴜᴘᴏꜱ',
  'nable': 'ᴏɴ / ᴏꜰꜰ', 
  'dl': 'ᴅᴇꜱᴄᴀʀɢᴀꜱ',
  'fun': 'ʜᴇʀʀᴀᴍɪᴇɴᴛᴀꜱ',
  'info': 'ɪɴꜰᴏʀᴍᴀᴄɪᴏɴ',
  'nsfw': 'ɴꜱꜰᴡ', 
  'owner': 'ᴄʀᴇᴀᴅᴏʀ',
  'mods': 'ꜱᴛᴀꜰꜰ',
  'audio': 'ᴀᴜᴅɪᴏꜱ', 
  'ai': 'ᴀɪ ʙᴏᴛ',
  'convertir': 'ᴄᴏɴᴠᴇʀᴛɪᴅᴏʀᴇꜱ',
  'audios': 'ᴀᴜᴅɪᴏꜱ',
}

const defaultMenu = {
     before: `Hola \`%name\` soy Luffy Ai, %greeting %readmore
   ࿙ֹ࡛࿚ֹ֢͜࿙ֹ࡛࿚ֹ֢͜࿙ֹ࡛࿚ֹㅤ᧙ᩳ 🍿ᧆᩳ   ࿙ֹ࡛࿚ֹ֢͜࿙ֹ࡛࿚ֹ֢͜࿙ֹ࡛࿚ֹᩦ
ᮬ᷼︵᷼⏜ㅤׅㅤ꒰ INFO USER ꒱ㅤׅㅤ⏜︵᷼   𑂳

ㅤᩧᩡ🏴‍☠️̣̣̣ᩘ᭢꒰ _*Usuario*_ ꒱ %name
ㅤᩧᩡ🏴‍☠️̣̣̣ᩘ᭢꒰ _*Corazones*_ ꒱ %corazones
ㅤᩧᩡ🏴‍☠️̣̣̣ᩘ᭢꒰ _*Nivel*_ ꒱ %level
 '︶꒦꒷○꒷꒦︶.
ᮬ᷼︵᷼⏜ㅤׅㅤ꒰ INFO BOT ꒱ㅤׅㅤ⏜︵᷼   𑂳

ㅤᩧᩡ🏴‍☠️̣̣̣ᩘ᭢꒰ _*Bot*_ ꒱ Luffy
ㅤᩧᩡ🏴‍☠️̣̣̣ᩘ᭢꒰ _*Rutuna*_ ꒱ %muptime
ㅤᩧᩡ🏴‍☠️̣̣̣ᩘ᭢꒰ _*Users*_ ꒱ %totalreg
 '︶꒦꒷○꒷꒦︶.
ㅤㅤ⩁꯭ ͡  ͡ᩚ꯭ ꯭⩁ㅤㅤ𑁯🫧ᰍㅤㅤ⩁꯭ ͡  ͡ᩚ꯭ ꯭⩁
`.trimStart(),
  header: '︵᷼ ⠑     ׅ    ⠃   ׅ  ⠊   ׅ    ׁ  ︵᷼ \n  ꒰ㅤ✿ㅤ꒱ `%category`\n ꒰꒰ᩭ𐇽ׅ᩻𝆅 🫖⃞⃞ ⃞᷒ׄ᷼*  ׄ🍚᮪ᩖᩖֺֺ ִ ࣪❖̸̷̶᷒ׄ᷼ᩡ ׅ\n╠ ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈',
  body: '୭ ~ ৎ %cmd %isdiamond %isPremium\n',
  footer: '           - ____  ♡   //  \n\n',
  after: ``,
}
let ppp = 'https://iili.io/ds8Qx9f.md.png'
let handler = async (m, { conn, usedPrefix: _p, __dirname }) => {
  try {
    let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
    let { exp, corazones, level, role } = global.db.data.users[m.sender]
    let { min, xp, max } = xpRange(level, global.multiplier)
    let name = await conn.getName(m.sender)
    let d = new Date(new Date + 3600000)
    let locale = 'es'
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
    let uptime = clockString(_uptime)
    let totalreg = Object.keys(global.db.data.users).length
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
    let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
      return {
        help: Array.isArray(plugin.tags) ? plugin.help : [plugin.help],
        tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
        prefix: 'customPrefix' in plugin,
        corazones: plugin.corazones,
        premium: plugin.premium,
        enabled: !plugin.disabled,
      }
    })
    for (let plugin of help)
      if (plugin && 'tags' in plugin)
        for (let tag of plugin.tags)
          if (!(tag in tags) && tag) tags[tag] = tag
    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || defaultMenu.before
    let header = conn.menu.header || defaultMenu.header
    let body = conn.menu.body || defaultMenu.body
    let footer = conn.menu.footer || defaultMenu.footer
    let after = conn.menu.after || (conn.user.jid == conn.user.jid ? '' : `Powered by https://wa.me/${conn.user.jid.split`@`[0]}`) + defaultMenu.after
    let _text = [
      before,
      ...Object.keys(tags).map(tag => {
        return header.replace(/%category/g, tags[tag]) + '\n' + [
          ...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
            return menu.help.map(help => {
              return body.replace(/%cmd/g, menu.prefix ? help : '%p' + help)
                .replace(/%isdiamond/g, menu.diamond ? '◜🪙◞' : '')
                .replace(/%isPremium/g, menu.premium ? '◜🎫◞' : '')
                .trim()
            }).join('\n')
          }),
          footer
        ].join('\n')
      }),
      after
    ].join('\n')
    let text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
let replace = {
'%': '%',
p: _p, uptime, muptime,
me: conn.getName(conn.user.jid),
taguser: '@' + m.sender.split("@s.whatsapp.net")[0],
npmname: _package.name,
npmdesc: _package.description,
version: _package.version,
exp: exp - min,
maxexp: xp,
botofc: (conn.user.jid == global.conn.user.jid ? '🤍 𝙴𝚂𝚃𝙴 𝙴𝚂 𝙴𝙻 𝙱𝙾𝚃 𝙾𝙵𝙲' : `🤍 𝚂𝚄𝙱-𝙱𝙾𝚃 𝙳𝙴: Wa.me/${global.conn.user.jid.split`@`[0]}`), 
totalexp: exp,
xp4levelup: max - exp,
github: _package.homepage ? _package.homepage.url || _package.homepage : '[unknown github url]',
greeting, level, corazones, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
readmore: readMore
}
text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])

const who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender

const pp = await conn.profilePictureUrl(who, 'image').catch(_ => 'https://telegra.ph/file/327f6ad853cb4f405aa80.jpg')

  let category = "video"
  const db = './media/database/db.json'
  const db_ = JSON.parse(fs.readFileSync(db))
  const random = Math.floor(Math.random() * db_.links[category].length)
  const rlink = db_.links[category][random]
  global.vid = rlink
  const response = await fetch(`https://f.uguu.se/ephRWiFx.mp4`)
  const gif = await response.buffer()
 // const img = imagen1

await conn.sendMessage(m.chat, {
      video: gif,
      gifPlayback: true,
      caption: Styles(text.trim()),
      contextInfo: {
      externalAdReply: {
      title: `━̸̸̸̶ꪴꪾꪸᚖ̷̷𝅾▹ =͟͟͞𝙻֟፝نﾁ۪۪۪۫۫۫۫ﾁצּ 🍿⃞̸̤̤ ̤፝֟͡ᔚ⍣ꪳ۫₎۬۟〬༼ຶཽ۪۪۫۫۫۫،ֶً̊.`,
      body: `╰<፤и┊ꪑꪎʒ>╯`,
      thumbnailUrl: 'https://qu.ax/zHQc.mp4',
      sourceUrl: `https://whatsapp.com/channel/0029ValMlRS6buMFL9d0iQ0S`,
      mediaType: 1,
      renderLargerThumbnail: false
      }
      }}, {
                        quoted: fakegif3
                    })

await m.react('🍿') 
// await conn.reply(m.chat, '*ꪹ͜𓂃͡𝗖𝗮𝗿𝗴𝗮𝗻𝗱𝗼 𝗘𝗹 𝗠𝗲𝗻𝘂 𝗗𝗲 𝗹𝗮 𝗕𝗼𝘁...𓏲੭*', fakegif3, { contextInfo:{ forwardingScore: 2022, isForwarded: true, externalAdReply: {title: packname, body: '🤍 ¡Génesis la mejor Bot!', sourceUrl: canal, thumbnail: icons }}})

// await conn.reply(m.chat, '🍟 Enviando el menú.....', m, rcanal)
let imagen_menu = await getBuffer(ppp);
//await conn.sendFile(m.chat, imagen_menu, 'menu.jpg', Styles(text.trim()), fakegif3, null, fake)

/* await conn.sendButton(m.chat, text, '@usxr_angelito0', ppp, [
['', '']], null, [['CANAL 🐈‍⬛', `${canal}`], ['CANAL 2', `wa.me/59168683798`]], m) */

  } catch (e) {
    conn.reply(m.chat, '🔵 Lo sentimos, el menú tiene un error', m, rcanal, )
    throw e
  }
}
handler.help = ['menucompleto']
handler.tags = ['main']
handler.command = ['menuall', 'allmenú', 'allmenu'] 
handler.register = true

export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}

  var ase = new Date();
  var hour = ase.getHours();
switch(hour){
  case 0: hour = 'Buenas noches 🌙'; break;
  case 1: hour = 'Buenas noches 💤'; break;
  case 2: hour = 'Buenas noches 🦉'; break;
  case 3: hour = 'Buenas noches ✨'; break;
  case 4: hour = 'Buenos dias 💫'; break;
  case 5: hour = 'Buenos dias 🌅'; break;
  case 6: hour = 'Buenos dias 🌄'; break;
  case 7: hour = 'Buenos dias 🌅'; break;
  case 8: hour = 'Buenos dias 💫'; break;
  case 9: hour = 'Buenos dias ✨'; break;
  case 10: hour = 'Buenos dias 🌞'; break;
  case 11: hour = 'Buenos dias 🌨'; break;
  case 12: hour = 'Buenos dias ❄'; break;
  case 13: hour = 'Buenos dias 🌤'; break;
  case 14: hour = 'Buenas tardes 🌇'; break;
  case 15: hour = 'Buenas tardes 🥀'; break;
  case 16: hour = 'Buenas tardes 🌹'; break;
  case 17: hour = 'Buenas tardes 🌆'; break;
  case 18: hour = 'Buenas noches 🌙'; break;
  case 19: hour = 'Buenas noches 🌃'; break;
  case 20: hour = 'Buenas noches 🌌'; break;
  case 21: hour = 'Buenas noches 🌃'; break;
  case 22: hour = 'Buenas noches 🌙'; break;
  case 23: hour = 'Buenas noches 🌃'; break;
}
  var greeting = hour;

/*const getBuffer = async (url, options) => {
try {
const res = await axios({
method: 'get',
url,
headers: {
'DNT': 1,
'Upgrade-Insecure-Request': 1,
},
...options,
responseType: 'arraybuffer',
});
return res.data;
} catch (e) {
console.log(`Error : ${e}`);
}
};*/