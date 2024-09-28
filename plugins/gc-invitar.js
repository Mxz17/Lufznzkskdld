let handler = async (m, { conn, args, text, usedPrefix, command }) => {
if (!text) throw `> ∙۬◌⃘࣭ٜ࣪࣪࣪۬፝͜🍿᪶۫۫྆•≭ *Ingrese el número al que quiere enviar una invitación al grupo*\n\n> ⌌᭨⌍ *Ejemplo :*\n*${usedPrefix + command}* 573218138672`
if (text.includes('+')) throw  `> ∙۬◌⃘࣭ٜ࣪࣪࣪۬፝͜🍿᪶۫۫྆•≭ *Ingrese el número todo junto sin el *+*᭄*`
if (isNaN(text)) throw '> ∙۬◌⃘࣭ٜ࣪࣪࣪۬፝͜🍿᪶۫۫྆•≭ *Ingrese sólo números más su código de país sin͟ espacios*'
let group = m.chat
let link = 'https://chat.whatsapp.com/' + await conn.groupInviteCode(group)
await conn.reply(text+'@s.whatsapp.net', `🤍 *INVITACIÓN A GRUPO*\n\nUn usuario te invitó a unirte a este grupo \n\n${link}`, m, {mentions: [m.sender]})
m.reply(`> ∙۬◌⃘࣭ٜ࣪࣪࣪۬፝͜🍿᪶۫۫྆•≭ *Se envió un enlace de invitación al usuario.*`) 

}
handler.help = ['invite *<numero>*']
handler.tags = ['grupo']
handler.command = ['invite', 'invitar'] 
handler.group = true
//handler.admin = true
handler.botAdmin = true

export default handler