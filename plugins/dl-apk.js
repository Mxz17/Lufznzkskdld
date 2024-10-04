import axios from 'axios';
import cheerio from 'cheerio';

const apkpureApi = 'https://apkpure.com/api/v2/search?q=';
const apkpureDownloadApi = 'https://apkpure.com/api/v2/download?id=';

async function searchApk(text) {
  const response = await axios.get(`${apkpureApi}${encodeURIComponent(text)}`);
  const data = response.data;
  return data.results;
}

async function downloadApk(id) {
  const response = await axios.get(`${apkpureDownloadApi}${id}`);
  const data = response.data;
  return data;
}

let handler = async (m, { conn, usedPrefix, command, text }) => {
  if (!text) throw `> ∙۬◌⃘࣭ٜ࣪࣪࣪۬፝͜🍿᪶۫۫྆•≭ *ACCIÓN MAL USADA\n\n°᳝ꯥ‧ٓ➭  *ESCRIBA EL NOMBRE DEL APK*, `;
  try {
    const searchResults = await searchApk(text);
    const apkData = await downloadApk(searchResults[0].id);
    const response = `${packname}
┣⸻⸻⸻ ⃟ ⃟▫⸻⸻⸻⌔☐❜｡۪۪۫۫
┋⌦ *Nombre :* ${apkData.name}
┋⌦ *Packge :* ${apkData.package}
┋⌦ *Última actl :* ${apkData.lastup}
┋⌦ *Tamaño :* ${apkData.size}
┣⸻⸻⸻⸻⸻⸻⌔☐❜｡۪۪۫۫
┋ *Descargando Apk* 🚀🚀🚀`;
    await conn.sendMessage(m.chat, { image: { url: apkData.icon }, caption: response }, { quoted: m });
    if (apkData.size.includes('GB') || apkData.size.replace(' MB', '') > 999) {
      return await conn.sendMessage(m.chat, { text: '> ∙۬◌⃘࣭ٜ࣪࣪࣪۬፝͜🍿᪶۫۫྆•≭ *EL APK ES MUY PESADO.*',  }, { quoted: m });
    }
    await conn.sendMessage(m.chat, { document: { url: apkData.dllink }, mimetype: 'application/vnd.android.package-archive', fileName: apkData.name + '.apk', caption: null }, { quoted: m });
  } catch (e) {
    await conn.reply(m.chat, `> ∙۬◌⃘࣭ٜ࣪࣪࣪۬፝͜🍿᪶۫۫྆•≭ *Ocurrio un error*\n\n${e}`, m);
    console.log(`> ∙۬◌⃘࣭ٜ࣪࣪࣪۬፝͜🍿᪶۫۫྆•≭ *Error* ${usedPrefix + command}`);
    console.log(e);
    handler.limit = false;
  }
};
handler.tags = ['dl']
handler.help = ['apk *<nombre>*']
handler.command = /^(apkp|apkpure|apkdl)$/i;
handler.register = true;
handler.limit = 2;
export default handler;
