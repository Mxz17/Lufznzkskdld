//creditos a kenisawa Dev
//modificaciones Angel-OFC
import { ttdl } from 'ruhend-scraper';

let handler = async (m, { conn, args, usedPrefix, command }) => {
 if (!args || !args[0]) return conn.reply(m.chat, '> ∙۬◌⃘࣭ٜ࣪࣪࣪۬፝͜🍿᪶۫۫྆•≭ *Ingresa El link Del vídeo a descargar*', m, fake, )
 if (!args[0].match(/tiktok/gi)) return conn.reply(m.chat, `> ∙۬◌⃘࣭ٜ࣪࣪࣪۬፝͜🍿᪶۫۫྆•≭ *Verifica que el link sea de TikTok*`, m, fake).then(_ => m.react('✖️'))
    try {
await m.react('🕓');
        let {
            title,
            author,
            username,
            published,
            like,
            comment,
            share,
            views,
            bookmark,
            video,
            cover,
            duration,
            music,
            profilePicture
        } = await ttdl(args[0]);//variables del resultado de 'ttdl'
       
let txt = '';
txt += `*✯⏤͟͟͞͞=TIKTOK DOWNLOAD=⏤͟͟͞͞✯*\n\n`;
txt += `> 🍿  ⃝༘⃕↳ *Título :* ${title || '❌'}\n`;
txt += `> 🍿  ⃝༘⃕↳ *Autor :* ${author || '❌'}\n`;
txt += `> 🍿  ⃝༘⃕↳ *Duracion :* ${duration || '❌'}\n`;
txt += `> 🍿  ⃝༘⃕↳ *Visitas :* ${views || '❌'}\n`;
txt += `> 🍿  ⃝༘⃕↳ *Likes :* ${like || '❌'}\n`; 
txt += `> 🍿  ⃝༘⃕↳ *Comentarios :* ${comment || '❌'}\n`;
txt += `> 🍿  ⃝༘⃕↳ *Share :* ${share || '❌'}\n`;
txt += `> 🍿  ⃝༘⃕↳ *Publicado :* ${published || '❌'}\n\n`;

//VIDEO TIKTOK
        await conn.sendFile(m.chat, video, 'tiktok.mp4', txt, m, null, rcanal);
//AUDIO TIKTOK
        await conn.sendMessage(m.chat, { audio: { url: music }, mimetype: "audio/mp4", fileName: title + '.mp3' }, { quoted: m })
        await m.react('✅');
    } catch (e) {//salir si hay un error
        await m.react('✖️');
        console.log(e)
    }
};

handler.help = ['tiktok *<link>*']
handler.corazones = 3
handler.tags = ['dl']
handler.command = /^(tiktok)$/i;

export default handler;
