import {toAudio} from '../lib/converter.js';
const handler = async (m, {conn, usedPrefix, command}) => {
  const q = m.quoted ? m.quoted : m;
  const mime = (q || q.msg).mimetype || q.mediaType || '';
  if (!/video|audio/.test(mime)) throw `> ∙۬◌⃘࣭ٜ࣪࣪࣪۬፝͜🍿᪶۫۫྆•≭ *Responda al video o nota de voz que desees convertir a audio/mp3*`;
  const media = await q.download();
  if (!media) throw '> ∙۬◌⃘࣭ٜ࣪࣪࣪۬፝͜🍿᪶۫۫྆•≭ *Lo lamento, Ocurrió un error al descargar su video, Porfavor vuelva a intentarlo*';
  const audio = await toAudio(media, 'mp4');
  if (!audio.data) throw '> ∙۬◌⃘࣭ٜ࣪࣪࣪۬፝͜🍿᪶۫۫྆•≭ *Lo lamento, Ocurrió un error al convertir su nota de voz a audio/mp𝟹, porfavor vurlva a intentarlo*';
  conn.sendMessage(m.chat, {audio: audio.data, mimetype: 'audio/mpeg'}, {quoted: m});
};
handler.alias = ['tomp3', 'toaudio'];
handler.command = ['tomp3','toaudio'];
handler.register = true
export default handler;