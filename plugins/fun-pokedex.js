import fetch from 'node-fetch';

let handler = async (m, { conn, text }) => {
if (!text) return conn.reply(m.chat, '> ∙۬◌⃘࣭ٜ࣪࣪࣪۬፝͜🍿᪶۫۫྆•≭ *¿Que Pokémon quieres buscar?.*', m, rcanal)
await m.react(rwait)
conn.reply(m.chat, `> ∙۬◌⃘࣭ٜ࣪࣪࣪۬፝͜🍿᪶۫۫྆•≭ *Buscando ${text}*`, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, showAdAttribution: true,
title: packname,
body: wm,
previewType: 0, thumbnail: icons,
sourceUrl: canal }}})
const url = `https://some-random-api.com/pokemon/pokedex?pokemon=${encodeURIComponent(text)}`;
const response = await fetch(url);
const json = await response.json();
if (!response.ok) {
await m.react(error)
return conn.reply(m.chat, '> ∙۬◌⃘࣭ٜ࣪࣪࣪۬፝͜🍿᪶۫۫྆•≭ *¡Oops! Parece que hubo un error al buscar el Pokémon. Por favor, inténtalo de nuevo más tarde.*', m, rcanal)}
const luffypokedex = `> ∙۬◌⃘࣭ٜ࣪࣪࣪۬፝͜🍿᪶۫۫྆•≭ *Pokedex - Información de ${json.name}*\n\n> ⪀ *Nombre:* ${json.name}\n> 〄 *ID:* ${json.id}\n> ▢ *Tipo:* ${json.type}\n>ⵘ *Habilidades:* ${json.abilities}\n*Tamaño:* ${json.height}\n> ⎏ *Peso:* ${json.weight}\n\n> ᨅ *Descripción:*\n${json.description}\n\n> 🔍᭄ ¡Encuentra más detalles sobre este Pokémon en la Pokedex! 🔍᭄\n\n🔗 https://www.pokemon.com/es/pokedex/${json.name.toLowerCase()}`
conn.reply(m.chat, luffypokedex, m, rcanal)
await m.react(done) }

handler.help = ['pokedex *<pokemon>*']
handler.tags = ['buscador']
handler.command = /^pokedex/i
export default handler