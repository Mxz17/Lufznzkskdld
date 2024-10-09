const handler = async (m, { conn }) => {
    const user = global.db.data.users[m.sender];
        conn.sendMessage(m.chat, {text: `> ∙۬◌⃘࣭ٜ࣪࣪࣪۬፝͜🍿᪶۫۫྆•≭ *@${m.sender.split('@')[0]} Ahora tienes recursos ilimitados*`, mentions: [m.sender]}, {quoted: fkontak}); m,rcanal)
      global.db.data.users[m.sender].money = Infinity;
    global.db.data.users[m.sender].estrellas = Infinity;
  global.db.data.users[m.sender].level = Infinity;
 global.db.data.users[m.sender].exp = Infinity;
};
handler.help = ['cheat'];
handler.tags = ['owner'];
handler.command = ['ilimitado','infiniy','chetar'];
handler.rowner = true;
handler.fail = null;
export default handler;