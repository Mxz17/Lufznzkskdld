import { createHash } from 'crypto'
let handler = async function (m, { conn, args, usedPrefix}) {
  if (!args[0]) return conn.reply(m.chat,`> ∙۬◌⃘࣭ٜ࣪࣪࣪۬፝͜🍿᪶۫۫྆•≭ *Ingresa tu número de serie junto al comando.*`, m,rcanal)
  let user = global.db.data.users[m.sender]
  let sn = createHash('md5').update(m.sender).digest('hex').slice(0, 6)        
  if (args[0] !== sn) return conn.reply(m.chat, '> ∙۬◌⃘࣭ٜ࣪࣪࣪۬፝͜🍿᪶۫۫྆•≭ Número de serie incorrecto', m,rcanal)
  user.registered = false
  conn.reply(m.chat, `> ∙۬◌⃘࣭ٜ࣪࣪࣪۬፝͜🍿᪶۫۫྆•≭ *Registro eliminado con éxito.*`, m,rcanal)
}
handler.help = ['unreg'] 
handler.tags = ['rg']

handler.command = ['unreg'] 
handler.register = true

export default handler