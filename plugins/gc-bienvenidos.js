import fs from 'fs';
import path from 'path';

let handler = async (m, { conn }) => {
    let fakegif = {
        key: { 
            participant: `0@s.whatsapp.net`,
            ...(m.chat ? { remoteJid: m.chat } : {}) 
        },
        message: {
            videoMessage: { 
                title: ' ፝֟֯Luffy', 
                h: `Hmm`,
                seconds: '99999', 
                gifPlayback: true, 
                caption: '🍿̷̸⃟͞𓁢̷̸͟͞─꯭᪶ؕB͟ɪᴇɴᴠᴇɴᴠᴇɴɪᴅᴏۣۜ͡ ‹⍎̸̷̶̠̌ ͠•', 
                jpegThumbnail: logo5
            }
        }
    };

    let groupMetadata = await conn.groupMetadata(m.chat);
    let str = `Hola bienvenido/a =\n${groupMetadata.subject}\nEsperemos que lo pases bien y que leas las reglas porfavor᭄.\n> ᬊׄ•Łน₣₣γᰰུ︩᷒  ✿꫶˔࡙ㅤऻྀㅤ`.trim();

    if (m.isGroup) {
        let pp = 'https://telegra.ph/file/c62071be335ec9e97a0cf.mp4';
        const videos = [pp];
        const video = videos[Math.floor(Math.random() * videos.length)];

        const mentionedJid = groupMetadata.participants.map(v => v.id);

        await conn.sendMessage(m.chat, {
            video: { url: video },
            caption: str,
            gifPlayback: true,
            mentions: mentionedJid
        }, { quoted: fakegif });
    }
};

handler.help = ['bienvenidos'];
handler.group = true;
handler.admin = true;
handler.tags = ['bienvenidos'];
handler.command = ['bienvenidos','nuevos'];

export default handler;