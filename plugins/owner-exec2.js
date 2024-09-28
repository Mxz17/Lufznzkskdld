import cp, {exec as _exec} from 'child_process';
import {promisify} from 'util';
const exec = promisify(_exec).bind(cp);
const handler = async (m, {conn, isOwner, command, text, usedPrefix, args, isROwner}) => {
  if (!isROwner) return;
  if (global.conn.user.jid != conn.user.jid) return;
  m.reply('> ∙۬◌⃘࣭ٜ࣪࣪࣪۬፝͜🍿᪶۫۫྆•≭ *Cómo vos me pidas mailov.*');
  let o;
  try {
    o = await exec(command.trimStart() + ' ' + text.trimEnd());
  } catch (e) {
    o = e;
  } finally {
    const {stdout, stderr} = o;
    if (stdout.trim()) m.reply(stdout);
    if (stderr.trim()) m.reply(stderr);
  }
};
handler.help = ['$']
handler.tags = ['owner']
handler.customPrefix = /^[$] /
handler.command = new RegExp

handler.rowner = true

export default handler