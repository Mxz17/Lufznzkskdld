// Creditos del codigo a @usxr_angelito //
/* GitHub: https://github.com/Angelito-OFC*/
import {WAMessageStubType} from '@whiskeysockets/baileys';
import fetch from 'node-fetch';

export async function before(m, { conn, participants}) {
if (!m.messageStubType || !m.isGroup) return
  const groupName = (await conn.groupMetadata(m.chat)).subject;
let usuario = `@${m.sender.split`@`[0]}`
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let users = participants.map(u => conn.decodeJid(u.id))
if (m.messageStubType == 21) {
await this.sendMessage(m.chat, { text: `\`ミ‧₊ 𝗅⿻⌔˽̅͢.⃗ᴀᴠɪsᴏ◠ˏ\ˋ❀⋆˖彡\n\n🍿ۜ͡.𝙼̶٭ۣ̤ۜ፝፝፝፝֟͜͡͡͡ *${usuario}*\n» ᴍᴏᴅɪғɪᴄᴏ ᴇʟ ɴᴏᴍʙʀᴇ :\n\n» *${m.messageStubParameters[0]}*`, mentions: [m.sender], mentions: (await conn.groupMetadata(m.chat)).participants.map(v => v.id) }, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
} else if (m.messageStubType == 22) {
await this.sendMessage(m.chat, { text: `ミ‧₊ 𝗅⿻⌔˽̅͢.⃗ᴀᴠɪsᴏ◠ˏ\ˋ❀⋆˖彡\n\n🍿ۜ͡.𝙼̶٭ۣ̤ۜ፝፝፝፝֟͜͡͡͡ *${usuario}* \n» ᴍᴏᴅɪғɪᴄᴏ ʟᴀ ғᴏᴛᴏ`, mentions: [m.sender] }, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100}) 
} else if (m.messageStubType == 24) {
await this.sendMessage(m.chat, { text: `ミ‧₊ 𝗅⿻⌔˽̅͢.⃗ᴀᴠɪsᴏ◠ˏ\ˋ❀⋆˖彡\n\n🍿ۜ͡.𝙼̶٭ۣ̤ۜ፝፝፝፝֟͜͡͡͡ *${usuario}*\n» ᴍᴏᴅɪғɪᴄᴏ ʟᴀ ᴅᴇsᴄʀɪᴍᴄɪᴏɴ:\n\n${m.messageStubParameters[0]}`, mentions: [m.sender] }, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
} else if (m.messageStubType == 25) {
await this.sendMessage(m.chat, { text: `🔒᭄ ᴀʜᴏʀᴀ *${m.messageStubParameters[0] == 'on' ? 'sᴏʟᴏ ᴀᴅᴍɪɴs' : 'ᴛᴏᴅᴏs'}* ᴘᴜᴇᴅᴇɴ ᴇᴅɪᴛᴀʀ ʟᴀ ɪɴғᴏ ᴅᴇʟ ɢʀᴜᴘᴏ`, mentions: [m.sender] }, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
} else if (m.messageStubType == 26) {
await this.sendMessage(m.chat, { text: `ミ‧₊ 𝗅⿻⌔˽̅͢.⃗ᴀᴠɪsᴏ◠ˏ\ˋ❀⋆˖彡\n\n» ᴇʟ ɢʀᴜᴘᴏ ᴇsᴛᴀ ${m.messageStubParameters[0] == 'on' ? 'ᴄᴇʀʀᴀᴅᴏ 🍿ۜ͡.𝙼̶٭ۣ̤ۜ፝፝፝፝֟͜͡͡͡: 'ᴀʙɪᴇʀᴛᴏ 🍿ۜ͡.𝙼̶٭ۣ̤ۜ፝፝፝፝֟͜͡͡͡'}\n ${m.messageStubParameters[0] == 'on' ? 'sᴏʟᴏ ᴀᴅᴍɪɴs ᴘᴜᴇᴅᴇɴ ᴇsᴄʀɪʙɪʀ' : 'ʏᴀ ᴘᴜᴇᴅᴇɴ ᴇsᴄʀɪʙɪʀ ᴛᴏᴅᴏs'} ᴇɴ ᴇsᴛᴇ ɢʀᴜᴘᴏ`, mentions: [m.sender] }, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
} else if (m.messageStubType == 29) {
await this.sendMessage(m.chat, { text: `ミ‧₊ 𝗅⿻⌔˽̅͢.⃗ᴀᴠɪsᴏ◠ˏ\ˋ❀⋆˖彡\n\n🍿ۜ͡.𝙼̶٭ۣ̤ۜ፝፝፝፝֟͜͡͡͡ *@${m.messageStubParameters[0].split`@`[0]}*\n » ᴀʜᴏʀᴀ ᴇs ᴀᴅᴍɪɴ.:\n\n» ᴅᴇ: ${groupName}\n\n» ᴀᴄᴄɪᴏɴ ᴇᴄʜᴀ ᴘᴏʀ :\n🍿ۜ͡.𝙼̶٭ۣ̤ۜ፝፝፝፝֟͜͡͡͡ *${usuario}*`, mentions: [`${m.sender}`,`${m.messageStubParameters[0]}`], mentions: (await conn.groupMetadata(m.chat)).participants.map(v => v.id) }, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
} else if (m.messageStubType == 30) {
await this.sendMessage(m.chat, { text: `ミ‧₊ 𝗅⿻⌔˽̅͢.⃗ᴀᴠɪsᴏ◠ˏ\ˋ❀⋆˖彡\n\n🍿ۜ͡.𝙼̶٭ۣ̤ۜ፝፝፝፝֟͜͡͡͡ *@${m.messageStubParameters[0].split`@`[0]}*\n » ᴅᴇᴊᴀ ᴅᴇ sᴇʀ ᴀᴅᴍɪɴ ᴅᴇ :\n\n» ɢʀᴜᴘᴏ : ${groupName}\n\n» ᴀᴄᴄɪᴏɴ ᴇᴄʜᴀ ᴘᴏʀ :\n◦ᮀᨘ۬․ٰ🍿⃕੭ *${usuario}*`, mentions: [`${m.sender}`,`${m.messageStubParameters[0]}`], mentions: (await conn.groupMetadata(m.chat)).participants.map(v => v.id) }, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
} else if (m.messageStubType == 72) {
await this.sendMessage(m.chat, { text: `${usuario} ᴄᴀɴʙɪᴏ ʟᴀ ᴅᴜʀᴀᴄɪᴏɴ ᴅᴇ ʟᴏs ᴍᴇɴsᴊᴇs ᴛᴇᴍᴘᴏʀᴀʟᴇs ᴀ : *@${m.messageStubParameters[0]}*`, mentions: [m.sender] }, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
} else if (m.messageStubType == 123) {
await this.sendMessage(m.chat, { text: `${usuario} ᴅᴇsᴀᴄᴛɪᴠᴏ ʟᴏs ᴍᴇɴsᴀᴊᴇs ᴛᴇᴍᴘᴏʀᴀʟᴇs.`, mentions: [m.sender] }, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
} else {
console.log({messageStubType: m.messageStubType,
messageStubParameters: m.messageStubParameters,
type: WAMessageStubType[m.messageStubType], 
})}}