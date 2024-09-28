const handler = async (m, {conn, text, command, usedPrefix}) => {
  if (m.mentionedJid.includes(conn.user.jid)) return;
  //const pp = './lib/img/warn.jpg';
  let who;
  if (m.isGroup) {
    who = m.mentionedJid[0] ?
      m.mentionedJid[0] :
      m.quoted ?
      m.quoted.sender :
      text;
  } else who = m.chat;
  const user = global.db.data.users[who];
  const bot = global.db.data.settings[conn.user.jid] || {};
  const dReason = 'No especificado';
  const msgtext = text || dReason;
  const sdms = msgtext.replace(/@\d+-?\d* /g, '');
  const warntext = `> ∙۬◌⃘࣭ٜ࣪࣪࣪۬፝͜🍿᪶۫۫྆•≭ *Etiqueta a una persona o responda a un mensaje del grupo para advertir al usuari*\n\n> ❁ *Ejemplo :*\n*${
    usedPrefix + command
  } @${global.suittag}*`;
  if (!who) {
    throw m.reply(warntext, m.chat, {mentions: conn.parseMention(warntext)});
  }
  user.warn += 1;
  await m.reply(
      `${
      user.warn == 1 ? `*@${who.split`@`[0]}*` : `> ⌔ *@${who.split`@`[0]}*`
      } Recibió una advertencia en este grupo݈݇─\nMotivo: ${sdms}\n*ADVERTENCIAS ${
        user.warn
      }/3*`,
      null,
      {mentions: [who]},
  );
  if (user.warn >= 3) {
    if (!bot.restrict) {
      return m.reply(
          '> ∙۬◌⃘࣭ٜ࣪࣪࣪۬፝͜🍿᪶۫۫྆•≭ *El owner del bot no tiene habilitado las restricciónes (.on 𝚛𝚎𝚜𝚝𝚛𝚒𝚌𝚝) Habla con el dueño para que lo prenda*',
      );
    }
    user.warn = 0;
    await m.reply(
        `> ∙۬◌⃘࣭ٜ࣪࣪࣪۬፝͜🍿᪶۫۫྆•≭ Pestañaste pa᭄!!\n*@${
          who.split`@`[0]
        }* Superaste lAs *3* advertencias, Ahora serás eliminado/a ·ٜꪶ `,
        null,
        {mentions: [who]},
    );
    await conn.groupParticipantsUpdate(m.chat, [who], 'remove');
  }
  return !1;
};

handler.command = /^(advertir|advertencia|warn|warning)$/i;
handler.admin = true;
handler.register = true;
handler.group = true;
handler.botAdmin = true;
export default handler;
