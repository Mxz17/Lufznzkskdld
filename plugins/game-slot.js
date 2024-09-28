//Codígo modificado por ya saben xd wa.me/5351524614

import { delay } from "@whiskeysockets/baileys";

const handler = async (m, { args, usedPrefix, command, conn }) => {
  const fa = `
> ∙۬◌⃘࣭ٜ࣪࣪࣪۬፝͜🍿᪶۫۫྆•≭ *Ingresa la cantidad que quieres apostar 𝙻𝙰* 

> ⏄ *Ejemplo :*
*${usedPrefix + command} 100*`.trim();
  if (!args[0] || isNaN(args[0]) || parseInt(args[0]) <= 0) throw fa;
  
  const apuesta = parseInt(args[0]);
  const users = global.db.data.users[m.sender];
  const time = users.lastslot + 10000;
  if (new Date() - users.lastslot < 10000) throw `> *⏳᭄ Espere ${msToTime(time - new Date())} para volver a apostar*`;
  if (apuesta < 100) throw '> ∙۬◌⃘࣭ٜ࣪࣪࣪۬፝͜🍿᪶۫۫྆•≭ *El mínimo para apostar es de {100} xp*';
  if (users.exp < apuesta) {
    throw `> ∙۬◌⃘࣭ٜ࣪࣪࣪۬፝͜🍿᪶۫۫྆•≭ *Tu xp no es suficiente para apostar esa cantidad xd, Juega otros juegos o interactúa con ⸙ Luffy-Ai para ganar + xp*`;
  }

  const emojis = ['🍿', '🌹', '🌱'];
  const getRandomEmojis = () => {
    const x = Array.from({ length: 3 }, () => emojis[Math.floor(Math.random() * emojis.length)]);
    const y = Array.from({ length: 3 }, () => emojis[Math.floor(Math.random() * emojis.length)]);
    const z = Array.from({ length: 3 }, () => emojis[Math.floor(Math.random() * emojis.length)]);
    return { x, y, z };
  };

  const initialText = '> ⁂⏤͟͟͞͞=┇ *SLOTS* \n⿴⃟ٍࣽ⚋⚌⚍⚎⚏ ፝֟֯🍿͜ᰰ᷒ᮬ✿ ⚏⚏⚏⚏⚋✧͢⃟\n';
  let { key } = await conn.sendMessage(m.chat, { text: initialText }, { quoted: m });

  const animateSlots = async () => {
    for (let i = 0; i < 5; i++) {
      const { x, y, z } = getRandomEmojis();
      const animationText = `
> ⁂⏤͟͟͞͞=┇*SLOTS* 
⿴⃟ٍࣽ⚋⚌⚍⚎⚏ ፝֟֯🍿͜ᰰ᷒ᮬ✿ ⚏⚏⚏⚏⚋✧͢⃟
${x[0]} : ${y[0]} : ${z[0]}
${x[1]} : ${y[1]} : ${z[1]}
${x[2]} : ${y[2]} : ${z[2]}
⚋⚋⚋⚋⚋⚋⚋⚋⚋`;
      await conn.sendMessage(m.chat, { text: animationText, edit: key }, { quoted: m });
      await delay(300);
    }
  };

  await animateSlots();

  const { x, y, z } = getRandomEmojis();
  let end;
  if (x[0] === y[0] && y[0] === z[0]) {
    end = `> *¡Felicidades! 🎁᭄ +${apuesta + apuesta} xp*`;
    users.exp += apuesta;
  } else if (x[0] === y[0] || x[0] === z[0] || y[0] === z[0]) {
    end = `> ☈ *¡Uy vv muy Serca!, Sigue intentando*\n*Toma +10 xp*`;
    users.exp += 10;
  } else {
    end = `> ✦ۜ *Persiste ahhh -${apuesta} xp*`;
    users.exp -= apuesta;
  }

  users.lastslot = Date.now();
  const finalResult = `
> ⁂⏤͟͟͞͞=┇ *SLOTS* 
⿴⃟ٍࣽ⚋⚌⚍⚎⚏ ፝֟֯🍿͜ᰰ᷒ᮬ✿ ⚏⚏⚏⚏⚋✧͢⃟
${x[0]} : ${y[0]} : ${z[0]}
${x[1]} : ${y[1]} : ${z[1]}
${x[2]} : ${y[2]} : ${z[2]}
⚋⚋⚋⚋⚋⚋⚋⚋⚋
> ⁂⏤͟͟͞͞=┇ ${end}`;
  await conn.sendMessage(m.chat, { text: finalResult, edit: key }, { quoted: m });
};

handler.help = ['slot <apuesta>'];
handler.tags = ['fun'];
handler.register = true
handler.command = ['slot']; y 
export default handler;

function msToTime(duration) {
  const milliseconds = parseInt((duration % 1000) / 100);
  let seconds = Math.floor((duration / 1000) % 60);
  let minutes = Math.floor((duration / (1000 * 60)) % 60);
  let hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

  hours = (hours < 10) ? '0' + hours : hours;
  minutes = (minutes < 10) ? '0' + minutes : minutes;
  seconds = (seconds < 10) ? '0' + seconds : seconds;

  return minutes + ' m ' + seconds + ' s ';
}