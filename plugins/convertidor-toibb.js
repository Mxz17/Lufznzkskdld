import fs from 'fs'
import FormData from 'form-data'
import axios from 'axios'
import fetch from 'node-fetch'

let handler = async (m, { conn }) => {

  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''

  await m.react('🕒')
  if (!mime.startsWith('image/')) {
    return m.reply('Responde a una *Imagen.*')
  }

  let media = await q.download()
  let formData = new FormData()
  formData.append('image', media, { filename: 'file' })

  let api = await axios.post('https://api.imgbb.com/1/upload?key=10604ee79e478b08aba6de5005e6c798', formData, {
    headers: {
      ...formData.getHeaders()
    }
  })

  await m.react('✅')
  if (api.data.data) {
    let txt = '`✯⏤͟͟͞͞=I B B  -  U P L O A D E R=⏤͟͟͞͞✯`\n\n'
        txt += `*𖦹҉ २꫶ Titulo* : ${q.filename || 'x'}\n`
        txt += `*𖦹҉ २꫶ Id* : ${api.data.data.id}\n`
        txt += `*𖦹҉ २꫶ Enlace* : ${api.data.data.url}\n`
        txt += `*𖦹҉ २꫶ Directo* : ${api.data.data.url_viewer}\n`
        txt += `*𖦹҉ २꫶ Mime* : ${mime}\n`
        txt += `*𖦹҉ २꫶ File* : ${q.filename || 'x.jpg'}\n`
        txt += `*𖦹҉ २꫶ Extension* : ${api.data.data.image.extension}\n`
        txt += `*𖦹҉ २꫶ Delete* : ${api.data.data.delete_url}\n\n`
        txt += `© ßﻻ : რ×ζ`
    await conn.sendFile(m.chat, api.data.data.url, 'ibb.jpg', txt, m, null, fake)
  } else {
    await m.react('✅')
  }
}
handler.tags = ['convertir']
handler.help = ['toibb']
handler.command = /^(tourl2|toibb)$/i
handler.register = true 
export default handler