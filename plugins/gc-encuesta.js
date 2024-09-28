let handler = async (m, { conn, text, args, usedPrefix, command }) => {

if (!args[0]) throw `> ∙۬◌⃘࣭ٜ࣪࣪࣪۬፝͜🍿᪶۫۫྆•≭ *Ingrese un texto para iniciar la escuesta.*\n\n> ◬ *Ejemplo :* \n*${usedPrefix + command}* texto|texto2...`
if (!text.includes('|')) throw  `> ۣۜ༓ Separe las encuestas con *|* \n\n📌᭄ *E᪶۫۫je᪶۫۫m᪶۫۫pl᪶۫۫o :* \n*${usedPrefix + command}* texto|texto2...`
let a = []
let b = text.split('|')
for (let c = 0; c < b.length; c++) {
a.push([b[c]])
                        }
                        return conn.sendPoll(m.chat, `${packname}`, a, m)
}
handler.help = ['encuesta <text|text2>']
handler.tags = ['grupo'] 
handler.command = ['poll', 'encuesta'] 
handler.group = true

export default handler