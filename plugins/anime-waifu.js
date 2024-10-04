// Modificado por: Angel-OFC 
// si lo tomas respeta créditos
import fetch from 'node-fetch';
import fs from 'fs/promises';
import path from 'path';
import axios from 'axios';
import FormData from "form-data"
import Jimp from "jimp"
const {
  proto,
  generateWAMessageFromContent,
  prepareWAMessageMedia,
  generateWAMessageContent,
  getDevice
} = (await import("@whiskeysockets/baileys")).default;

let handler = async (m, { command, conn }) => {
  await m.react('🕒');

  try {
    // Número de imágenes a solicitar
    const imageCount = 10;
    const messages = [];

    // Obtener imágenes de la API
    for (let i = 0; i < imageCount; i++) {
      const res = await fetch('https://api.waifu.pics/sfw/waifu');
      if (!res.ok) throw new Error('Error al obtener imagen de waifu');
      const json = await res.json();
      if (!json.url) throw new Error('> ∙۬◌⃘࣭ٜ࣪࣪࣪۬፝͜🍿᪶۫۫྆•≭ *No se encontró la URL de la imagen*');

      // Preparar el mensaje
      const caption = `Imagen ${i + 1}`;
      messages.push([caption, '*｟ 𖠲۪۫ ℒચｷｷ𝔦 Ѧ𝕚 𝕭𝓲 : ʍҳӡ ｠*', json.url, [[]], [[]], [[]], [[]]]);
    }

    // Enviar el carrusel
    await m.react('✅');
    await conn.sendCarousel(m.chat, '*\`〘 ਘ  ﾑ  讠ﾁ  い - ア  ቾ  ح  ន〙\`*', `"ુ _\`ᴀ᪶۫۫\` \`ɴ᪶۫۫\` \`ɪ᪶۫۫\` \`ᴍ᪶۫۫\` \`ᴇ᪶۫۫\`_ ૂ"`, command, messages, null);

  } catch (error) {
    console.error(error);
    conn.reply(m.chat, '> ∙۬◌⃘࣭ٜ࣪࣪࣪۬፝͜🍿᪶۫۫྆•≭ *Error al procesar la solicitud*', m);
  }
};

handler.help = ['waifu'];
handler.tags = ['anime'];
handler.command = ['waifu'];
handler.register = true;

export default handler;