const xppercookies = 350;
const handler = async (m, {conn, command, args}) => {
  let count = command.replace(/^buy/i, '');
  count = count ? /all/i.test(count) ? Math.floor(global.db.data.users[m.sender].exp / xppercookies) : parseInt(count) : args[0] ? parseInt(args[0]) : 1;
  count = Math.max(1, count);
  if (global.db.data.users[m.sender].exp >= xppercookies * count) {
    global.db.data.users[m.sender].exp -= xppercookies * count;
    global.db.data.users[m.sender].corazones += count;
    conn.reply(m.chat, `
> ≿⁞ꜜ₊̣ 𝙱᳕𝙸̶ Mˣᶻ %

✰̥̣͙̣͙̣͙̣͙̣͙̣͙̣͙̣͙̣͙̣͙̣͙̣͙̣͙͜͡✰͜͡┅͓̼͓͓͓͓͓͓͓͓͓͓͓͓᪱━͓̼͓͓͓͓͓͓͓͓͓᪱┉͓̼͓͓͓᪱┄͓̼͓͓᪱𝆭 ᭼۪۪۪۪۪ٜ۫✡︎۪۪۪۪۪۪۪۪۪ٜ᭼ִஓீ݆ܱꪰܰ͜͡ڿ✰̥̣͙̣͙̣͙̣͙̣͙̣͙̣͙̣͙̣͙̣͙̣͙̣͙̣͙͜͡✰͜͡᭼ִ𝆤 ┄͓̼͓͓᪱━͓̼͓͓͓͓͓͓͓͓͓᪱┉͓̼͓͓͓᪱✰̥̣͙̣͙̣͙̣͙̣͙̣͙̣͙̣͙̣͙̣͙̣͙̣͙̣͙͜͡
          *💸Nota de pago*
✰̥̣͙̣͙̣͙̣͙̣͙̣͙̣͙̣͙̣͙̣͙̣͙̣͙̣͙͜͡✰͜͡┅͓̼͓͓͓͓͓͓͓͓͓͓͓͓᪱━͓̼͓͓͓͓͓͓͓͓͓᪱┉͓̼͓͓͓᪱┄͓̼͓͓᪱𝆭 ᭼۪۪۪۪۪ٜ۫✡︎۪۪۪۪۪۪۪۪۪ٜ᭼ִஓீ݆ܱꪰܰ͜͡ڿ✰̥̣͙̣͙̣͙̣͙̣͙̣͙̣͙̣͙̣͙̣͙̣͙̣͙̣͙͜͡✰͜͡᭼ִ𝆤 ┄͓̼͓͓᪱━͓̼͓͓͓͓͓͓͓͓͓᪱┉͓̼͓͓͓᪱✰̥̣͙̣͙̣͙̣͙̣͙̣͙̣͙̣͙̣͙̣͙̣͙̣͙̣͙͜͡
  〻⌦Compra nominal :: + ${count} 🤍
  〻⌦Gastado :: -${xppercookies * count} XP
 .:｡+ﾟ.:｡†ﾟ.:｡+ﾟ.:｡†ﾟ.:｡+ﾟ.:｡†ﾟ.:｡
◆ ▬▬▬▬ 🍀̸̷͓͓͓̽̽̽🏴‍☠️🍀 ▬▬▬▬ ◆`, m, rcanal);
  } else conn.reply(m.chat, `> ∙۬◌⃘࣭ٜ࣪࣪࣪۬፝͜🍿᪶۫۫྆•≭ Lo siento, no tienes suficiente *XP* para comprar *${count}* Corazones 🤍`, m, rcanal);
};
handler.help = ['Buy', 'Buyall'];
handler.tags = ['xp'];
handler.register = true
handler.command = ['buy', 'buyall'];

handler.disabled = false;

export default handler;