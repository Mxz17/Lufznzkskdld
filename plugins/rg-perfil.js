import PhoneNumber from 'awesome-phonenumber'
import fetch from 'node-fetch'
var handler = async (m, { conn }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = 'https://iili.io/ds8bWmJ.md.png'
let { premium, level, corazones, exp, lastclaim, registered, regTime, age, role } = global.db.data.users[m.sender]
let username = conn.getName(who)
let noprem = `
៚ Pᴇʀғɪʟ ᴅᴇʟ ᴜsᴜᴀʀɪᴏ
 ︶ּ⏝ׅ︶ ᧔ ᰔ᧓  ︶ּ⏝ׅ︶

✯ Nᴏᴍʙʀᴇ :: ${username}
✯ Tᴀɢ :: @${who.replace(/@.+/, '')}
✯ Rᴇɢɪsᴛʀᴀᴅᴏ :: ${registered ? '✅': '❌'}

╰៚ Rᴇᴄᴜʀsᴏs ᴅᴇʟ ᴜsᴜᴀʀɪᴏ
🤍 *Corazones:* ${corazones}
💥 *Nivel:* ${level}
💫 *Experiencia:* ${exp}
✨️ *Rango:* ${role}

💖 *Premium:* ${premium ? '✅': '❌'}
`.trim()
let prem = `╭──⪩ 𝐔𝐒𝐔𝐀𝐑𝐈𝐎 𝐏𝐑𝐄𝐌𝐈𝐔𝐌 ⪨
│⧼👤⧽ *ᴜsᴜᴀʀɪᴏ:* 「${username}」
│⧼💌⧽ *ʀᴇɢɪsᴛʀᴀᴅᴏ:* ${registered ? '✅': '❌'}
│⧼🔱⧽ *ʀᴏʟ:* Vip 👑
╰───⪨

╭────⪩ 𝐑𝐄𝐂𝐔𝐑𝐒𝐎𝐒 ⪨
│⧼🤍⧽ *Corazones:* ${corazones}
│⧼🔰⧽ *ɴɪᴠᴇʟ:* ${level}
│⧼💫⧽ *ᴇxᴘᴇʀɪᴇɴᴄɪᴀ:* ${exp}
│⧼⚜️⧽ *ʀᴀɴɢᴏ:* ${role}
╰───⪨ *𝓤𝓼𝓾𝓪𝓻𝓲𝓸 𝓓𝓮𝓼𝓽𝓪𝓬𝓪𝓭𝓸* ⪩`.trim()
conn.sendFile(m.chat, pp, 'perfil.jpg', `${premium ? prem.trim() : noprem.trim()}`, m, rcanal, { mentions: [who] })
}
handler.help = ['profile']
handler.register = true
//handler.group = true
handler.tags = ['rg']
handler.command = ['profile', 'perfil']
export default handler