import pkg from '@whiskeysockets/baileys'
import fs from 'fs'
import fetch from 'node-fetch'
import axios from 'axios'
import moment from 'moment-timezone'
const { generateWAMessageFromContent, prepareWAMessageMedia, proto } = pkg

var handler = m => m
handler.all = async function (m) {

global.getBuffer = async function getBuffer(url, options) {
try {
options ? options : {}
var res = await axios({
method: "get",
url,
headers: {
'DNT': 1,
'User-Agent': 'GoogleBot',
'Upgrade-Insecure-Request': 1
},
...options,
responseType: 'arraybuffer'
})
return res.data
} catch (e) {
console.log(`Error : ${e}`)
}}

let pp = ''
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
//let pp = await conn.profilePictureUrl(who, 'image').catch(_ => 'https://telegra.ph/file/327f6ad853cb4f405aa80.jpg')

//creador y otros
global.creador = 'Wa.me/59897246324'
global.ofcbot = `${conn.user.jid.split('@')[0]}`
global.asistencia = 'Wa.me/59897246324'
global.namechannel = '✿̤֟- 𝐋𝐮𝐟𝐟𝐲 - 𝐁𝐨𝐭 𝐂𝐡𝐚𝐧𝐧𝐞𝐥᭄'
global.namechannel2 = '𝗠𝗼𝗼𝗻𝗹𝗶𝗴𝗵𝘁 - 𝗧𝗲𝗮𝗺'
global.namegrupo = '𝗚𝗿𝗼𝘂𝗽 𝗔𝗶 𝗬𝗮𝗲𝗺𝗼𝗿𝗶'
global.namecomu = '𝗖𝗼𝗺𝘂𝗻𝗶𝗱𝗮𝗱 𝗔𝗶 𝗬𝗮𝗲𝗺𝗼𝗿𝗶'
global.namecomu2 = '𝗖𝗼𝗺𝘂𝗻𝗶𝗱𝗮𝗱 𝗠𝗼𝗼𝗻𝗹𝗶𝗴𝗵𝘁'
global.colab1 = '𝗚𝗮𝘁𝗮𝗕𝗼𝘁 & 𝗬𝗮𝗲𝗺𝗼𝗿𝗶'
global.colab2 = '𝗠𝗼𝗼𝗻𝗟𝗶𝗴𝗵𝘁 - 𝗕𝗼𝘁𝘀'
global.colab3 = '𝗚𝗿𝗼𝘂𝗽 𝗔𝗶 𝗬𝗮𝗲𝗺𝗼𝗿𝗶'

//Reacciones De Comandos.!
global.rwait = '🕒'
global.done = '✅'
global.error = '✖️'

//Emojis determinado de Ai Genesis
global.emoji = '🍿'
global.emoji2 = '🍿'
global.emoji3 = '🍿'
global.emoji4 = '🍿'
global.emojis = [emoji, emoji2, emoji3, emoji4].getRandom()

//mensaje en espera
global.wait = '५🍿 ᰰུ︩᷒ ㅤ፝֟᷼ᴇsᴘᴇʀᴇ ᴜɴ ᴍᴏᴍᴇɴᴛᴏ 〢sᴏʏ ʟᴇɴᴛ 𓁢̷̸᭄᭄͟͞';
global.waitt = '५🍿 ᰰུ︩᷒ ㅤ፝֟᷼ᴇsᴘᴇʀᴇ ᴜɴ ᴍᴏᴍᴇɴᴛᴏ 〢sᴏʏ ʟᴇɴᴛ𓁢̷̸᭄᭄͟͞';
global.waittt = '५🍿 ᰰུ︩᷒ ㅤ፝֟᷼ᴇsᴘᴇʀᴇ ᴜɴ ᴍᴏᴍᴇɴᴛᴏ 〢sᴏʏ ʟᴇɴᴛ𓁢̷̸᭄᭄͟͞';
global.waitttt = '५🍿 ᰰུ︩᷒ ㅤ፝֟᷼ᴇsᴘᴇʀᴇ ᴜɴ ᴍᴏᴍᴇɴᴛᴏ 〢sᴏʏ ʟᴇɴᴛ 𓁢̷̸᭄᭄͟͞';

//Enlaces
var canal = 'https://whatsapp.com/channel/0029VaJxgcB0bIdvuOwKTM2Y'  
var git = 'https://github.com/Angelito-OFC' 
var github = 'https://github.com/Angelito-OFC/Genesis-OFC1' 
var instagram = 'https://www.instagram.com/usxr_angelito0' 

global.redes = [canal, git, github, instagram].getRandom()

//Imagen
let category = "imagen"
const db = './media/database/db.json'
const db_ = JSON.parse(fs.readFileSync(db))
const random = Math.floor(Math.random() * db_.links[category].length)
const randomlink = db_.links[category][random]
const response = await fetch(randomlink)
const rimg = await response.buffer()
global.icons = rimg

//• ↳ ◜𝑻𝑰𝑬𝑴𝑷𝑶 𝑹𝑷𝑮◞ • ⚔
var ase = new Date(); var hour = ase.getHours(); switch(hour){ case 0: hour = 'Lɪɴᴅᴀ Nᴏᴄʜᴇ 🌃'; break; case 1: hour = 'Lɪɴᴅᴀ Nᴏᴄʜᴇ 🌃'; break; case 2: hour = 'Lɪɴᴅᴀ Nᴏᴄʜᴇ 🌃'; break; case 3: hour = 'Lɪɴᴅᴀ Mᴀɴ̃ᴀɴᴀ 🌄'; break; case 4: hour = 'Lɪɴᴅᴀ Mᴀɴ̃ᴀɴᴀ 🌄'; break; case 5: hour = 'Lɪɴᴅᴀ Mᴀɴ̃ᴀɴᴀ 🌄'; break; case 6: hour = 'Lɪɴᴅᴀ Mᴀɴ̃ᴀɴᴀ 🌄'; break; case 7: hour = 'Lɪɴᴅᴀ Mᴀɴ̃ᴀɴᴀ 🌅'; break; case 8: hour = 'Lɪɴᴅᴀ Mᴀɴ̃ᴀɴᴀ 🌄'; break; case 9: hour = 'Lɪɴᴅᴀ Mᴀɴ̃ᴀɴᴀ 🌄'; break; case 10: hour = 'Lɪɴᴅᴏ Dɪᴀ 🌤'; break; case 11: hour = 'Lɪɴᴅᴏ Dɪᴀ 🌤'; break; case 12: hour = 'Lɪɴᴅᴏ Dɪᴀ 🌤'; break; case 13: hour = 'Lɪɴᴅᴏ Dɪᴀ 🌤'; break; case 14: hour = 'Lɪɴᴅᴀ Tᴀʀᴅᴇ 🌆'; break; case 15: hour = 'Lɪɴᴅᴀ Tᴀʀᴅᴇ 🌆'; break; case 16: hour = 'Lɪɴᴅᴀ Tᴀʀᴅᴇ 🌆'; break; case 17: hour = 'Lɪɴᴅᴀ Tᴀʀᴅᴇ 🌆'; break; case 18: hour = 'Lɪɴᴅᴀ Nᴏᴄʜᴇ 🌃'; break; case 19: hour = 'Lɪɴᴅᴀ Nᴏᴄʜᴇ 🌃'; break; case 20: hour = 'Lɪɴᴅᴀ Nᴏᴄʜᴇ 🌃'; break; case 21: hour = 'Lɪɴᴅᴀ Nᴏᴄʜᴇ 🌃'; break; case 22: hour = 'Lɪɴᴅᴀ Nᴏᴄʜᴇ 🌃'; break; case 23: hour = 'Lɪɴᴅᴀ Nᴏᴄʜᴇ 🌃'; break;}
global.saludo = hour;

//tags
global.nombre = conn.getName(m.sender)
global.taguser = '@' + m.sender.split("@s.whatsapp.net")
var more = String.fromCharCode(8206)
global.readMore = more.repeat(850)

//Fakes
global.fkontak = { key: { participants:"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }

global.fake = { contextInfo: { isForwarded: true, forwardedNewsletterMessageInfo: { newsletterJid: '120363220939514640@newsletter', newsletterName: "⊱۪-▹ ʟᴜғғʏ ⃖-ᴄʜᴀɴɴᴇʟ !   ̼  ☆⃝ ۪.۫୧੭۪.۫", serverMessageId: -1 }
}}, { quoted: m }

global.icono = [ 
'https://iili.io/dsvLXUJ.md.png',
'https://iili.io/dsvpB1I.md.png',
'https://iili.io/dsvyI3P.md.png',
'https://iili.io/ds8JsVf.md.png',
'https://iili.io/ds83u8N.md.png',
'https://iili.io/ds8FYJV.md.png',
'https://iili.io/ds8fK92.md.png',
].getRandom()

global.rcanal = { contextInfo: { isForwarded: true, forwardedNewsletterMessageInfo: { newsletterJid: "120363220939514640@newsletter", serverMessageId: 100, newsletterName: '⊱۪-▹ ʟᴜғғʏ ⃖-ᴄʜᴀɴɴᴇʟ !   ̼  ☆⃝ ۪.۫୧੭۪.۫', }, externalAdReply: { showAdAttribution: true, title: packname, body: 'ꉹꠥ۪۪۪፝֟͡🍿۪۪۪፝֟۫͡ꉹꠥ ¡ ━─꯭᪶ʟᴜғғʏ ͝┊ Sᴜᴘᴇʀ ͝┊Bᴏᴛ !', mediaUrl: null, description: null, previewType: "PHOTO", thumbnailUrl: icono, sourceUrl: redes, mediaType: 1, renderLargerThumbnail: false }, }, }}

export default handler
