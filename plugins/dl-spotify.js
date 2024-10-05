// By Jtxs 🐢
import fetch from 'node-fetch';

let handler = async (m, { conn, args, usedPrefix, command }) => {
if (!args[0]) return conn.reply(m.chat, '> ∙۬◌⃘࣭ٜ࣪࣪࣪۬፝͜🍿᪶۫۫྆•≭ *Ingresa un enlace de spotify*', m, fake);
await m.react('🕓');
 
try {
let api = await fetch(`https://apis-starlights-team.koyeb.app/starlight/spotifydl?url=${args[0]}`);
let json = await api.json();
let { title, artist, album, thumbnail, spotify, music } = json


let txt = `> ༁ *Titulo* : ${title}
*Artista* : ${artist}
*Album* : ${album || ':v'}
*Link* : ${spotify}`
await conn.sendFile(m.chat, thumbnail, 'thumbnail.jpg', txt, m);

await m.react('✅');
conn.sendMessage(m.chat, { audio: { url: music }, fileName: `${title}.mp3`, mimetype: 'audio/mpeg' }, { quoted: m })


} catch {
await m.react('✖️');
conn.reply('error :v')    
}
}
    
handler.help = ['spotifydl *<link>*']
handler.corazones = 3
handler.tags = ['dl']
handler.command = ['spotifydl'];

export default handler;