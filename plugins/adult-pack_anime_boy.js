import axios from "axios"
let handler = async (m, {command, conn, usedPrefix}) => {
        m.react('✅')
let res = (await axios.get(`https://raw.githubusercontent.com/Incongnito45/ExoticoBot-MD/master/NODE_EXOTICO_JSON/node-exotico-anime-boy/hot-${command}.json`)).data  
let haha = await res[Math.floor(res.length * Math.random())]  
if (!db.data.chats[m.chat].modohorny && m.isGroup) throw `> ∙۬◌⃘࣭ٜ࣪࣪࣪۬፝͜🍿᪶۫۫྆•≭ Los comandos para adultos están desactivados, Use el comando : #on modohorny.` 
conn.sendButton(m.chat, `🔥🐻🍃 _${command}_ 🍃🐻🔥`.trim(), packname, haha, [['🥃 𝙎𝙞𝙜𝙪𝙞𝙚𝙣𝙩𝙚 🥃', `${usedPrefix + command}`]], null, null, m)    
}
handler.command = handler.help = ['takeda', 'asuma', 'endeavor']
handler.tags = ['nsfw']
export default handler 