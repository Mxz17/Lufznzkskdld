const handler = async (m, {conn, usedPrefix, text, command}) => {
  let hash = text;
  if (m.quoted && m.quoted.fileSha256) hash = m.quoted.fileSha256.toString('hex');
  if (!hash) throw `> ∙۬◌⃘࣭ٜ࣪࣪࣪۬፝͜🍿᪶۫۫྆•≭ *Solo se pueden asignar textos o comandos asignados a stickers o imágenes para obtener el código asignado use el comando ${usedPrefix}listcmd*`;
  const sticker = global.db.data.sticker;
  if (sticker[hash] && sticker[hash].locked) throw '> ∙۬◌⃘࣭ٜ࣪࣪࣪۬፝͜🍿᪶۫۫྆•≭ *Solo el owner puede reali la eliminación*';
  delete sticker[hash];
  m.reply(`*☾✢☽ El texto/Comando asignado al sticker/imagen fue eliminada de la base de datos correctamente*`);
};
handler.command = ['delcmd'];
handler.rowner = true;
export default handler;
