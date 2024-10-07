let handler = async (m, { conn, text }) => {
if (!text) return conn.reply(m.chat, '> ∙۬◌⃘࣭ٜ࣪࣪࣪۬፝͜🍿᪶۫۫྆•≭ *Ingresa un nombre para el grupo.*', m,rcanal)
try{
m.reply('> ∙۬◌⃘࣭ٜ࣪࣪࣪۬፝͜🍿᪶۫۫྆•≭ *Creando grupo*')
let group = await conn.groupCreate(text, [m.sender])
let link = await conn.groupInviteCode(group.gid)
m.reply('https://chat.whatsapp.com/' + url)
} catch (e) {
m.reply(`> ∙۬◌⃘࣭ٜ࣪࣪࣪۬፝͜🍿᪶۫۫྆•≭ *Ocurrió un error.*`)
}
}
handler.help = ['grupocrear <nombre>']
handler.tags = ['mods']
handler.command = ['creargp', 'newgc', 'creargrupo', 'grupocrear']
handler.rowner = true
handler.register = true
export default handler
