import PhoneNumber from 'awesome-phonenumber'
import fetch from 'node-fetch'
var handler = async (m, { conn }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = 'https://iili.io/ds8bWmJ.md.png'
let { premium, level, corazones, exp, lastclaim, registered, regTime, age, role } = global.db.data.users[m.sender]
let username = conn.getName(who)
let noprem = `
╰៚ Pᴇʀғɪʟ ᴅᴇʟ ᴜsᴜᴀʀɪᴏ
  ︶ּ⏝ׅ︶ ᧔ ᰔ᧓  ︶ּ⏝ׅ︶

✯ Nᴏᴍʙʀᴇ :: ${username}
✯ Tᴀɢ :: @${who.replace(/@.+/, '')}
✯ Rᴇɢɪsᴛʀᴀᴅᴏ :: ${registered ? '✅': '❌'}

╰៚ Rᴇᴄᴜʀsᴏs ᴅᴇʟ ᴜsᴜᴀʀɪᴏ
   ︶ּ⏝ׅ︶ ᧔ ᰔ᧓  ︶ּ⏝ׅ︶
✯ Cᴏʀᴀᴢᴏɴᴇs :: ${corazones}
✯ Nɪᴠᴇʟ :: ${level}
✯ Exᴘ :: ${exp}
✯ Rᴀɴɢᴏ:: ${role}
✯ Pʀᴇᴍɪᴜᴍ:: ${premium ? '✅': '❌'}
  ͡⏜͡︵ ꒰͜͡Gᴇɴᴇsɪs᭄  ͡⏜︵͡
`.trim()
let prem = ` ွဳ⃟ۣۜ💸ۣۜ=  Rᴇᴄᴜʀsᴏs ᴅᴇʟ ᴜsᴜᴀʀɪᴏ
  |︶ᩘ|ᩞ︶፝֟ᮬ|︶|ᩞᩘ︶ᮬ|ㅤ🤍ᩙ̫ㅤ|︶ᩘ|ᩞ︶፝֟ᮬ|︶|ᩞᩘ︶ᮬ|

⬪࣪ꥈ👑✯ۣ̤ۜ֟ᭃ Nᴏᴍʙʀᴇ :: 「${username}」
⬪࣪ꥈ👑✯ۣ̤ۜ֟ᭃ Rᴇɢɪsᴛʀᴀᴅᴏ :: ${registered ? '✅': '❌'}
⬪࣪ꥈ👑✯ۣ̤ۜ֟ᭃ Rᴏʟ :: Vip 👑

  ွဳ⃟ۣۜ💸ۣۜ=  Rᴇᴄᴜʀsᴏs ᴅᴇʟ ᴜsᴜᴀʀɪᴏ
  |︶ᩘ|ᩞ︶፝֟ᮬ|︶|ᩞᩘ︶ᮬ|ㅤ🤍ᩙ̫ㅤ|︶ᩘ|ᩞ︶፝֟ᮬ|︶|ᩞᩘ︶ᮬ|

⬪࣪ꥈ👑✯ۣ̤ۜ֟ᭃ Cᴏʀᴀᴢᴏɴᴇs :: ${corazones}
⬪࣪ꥈ👑✯ۣ̤ۜ֟ᭃ Nɪᴠᴇʟ :: ${level}
⬪࣪ꥈ👑✯ۣ̤ۜ֟ᭃ Exᴘ :: ${exp}
⬪࣪ꥈ👑✯ۣ̤ۜ֟ᭃ Rᴀɴɢᴏ:: ${role}
.ㅤ⋱  ִㅤֺ    ִ  ⁝  ִㅤֺ    ִ  ⋰ㅤׄㅤㅤ
   𒀭࣪⋆⢾͝⁅֟፝᷼ㅤ⃘꤫Gᴇɴᴇsɪs☆⃝꯭፝֟͡★ ོ⁩❟`.trim()
conn.sendFile(m.chat, pp, 'perfil.jpg', `${premium ? prem.trim() : noprem.trim()}`, m, rcanal, { mentions: [who] })
}
handler.help = ['profile']
handler.register = true
//handler.group = true
handler.tags = ['rg']
handler.command = ['profile', 'perfil']
export default handler