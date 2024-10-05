import yts from 'yt-search'
let handler = async (m, { conn, command, text, usedPrefix }) => {

  if (!text) return conn.reply(m.chat, '> ∙۬◌⃘࣭ٜ࣪࣪࣪۬፝͜🍿᪶۫۫྆•≭ *Ingresa El Nombre De Lo Que Quieres Buscar 🥀ᮬ᭄ᮬ᭄*', m, fake)
        let mame = ` `
        let res = await yts(text)
        let vid = res.videos[0]
        if (!vid) throw `> ∙۬◌⃘࣭ٜ࣪࣪࣪۬፝͜🍿᪶۫۫྆•≭ *Vídeo/Audio no encontrado*`
        let { title, description, thumbnail, videoId, timestamp, views, ago, url } = vid
        //const url = 'https://www.youtube.com/watch?v=' + videoId
        m.react('💿') 
  let play = `*✯⏤͟͟͞͞=YOUTUBE - PLAY=⏤͟͟͞͞✯*

> ১ *TÍTULO :* ${vid.title}
> ১ *SUBIDO :* ${vid.ago}
> ১ *DURACIÓN :* ${vid.timestamp}
> ১ *VISTAS :* ${vid.views.toLocaleString()}`
 await conn.sendButton(m.chat, play, mame, thumbnail, [
    ['⎝❑⃕ཷ 𝗠 𝗨 𝗦 𝗜 𝗖 𝗔  𝗠 𝗣 𝟯', `${usedPrefix}fgmp3 ${url}`],
    ['⎝❑⃕ཷ 𝗩 𝗜 𝗗 𝗘 𝗢  𝗠 𝗣 𝟰', `${usedPrefix}fgmp4 ${url}`],
['⎝❑⃕ཷ 𝗠 𝗨 𝗦 𝗜 𝗖   𝗗 𝗢 𝗖', `${usedPrefix}ytmp3doc ${url}`],
['⎝❑⃕ཷ 𝗩 𝗜 𝗗 𝗘 𝗢  𝗗 𝗢 𝗖', `${usedPrefix}ytmp4doc ${url}`]
  ], null, [['🍿ᮬ᭄ᮬ᭄ 𝗖 𝗔 𝗡 𝗔 𝗟  𝗢 𝗙 𝗖 🌹；', `${canal}`]], m)
}
handler.help = ['play']
handler.tags = ['dl']
handler.command = ['play', 'playvid']
handler.disabled = false

export default handler