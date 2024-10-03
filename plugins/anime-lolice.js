var handler = async (m, { conn, usedprefix }) => {

let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
conn.sendFile(m.chat, global.API('https://some-random-api.com', '/canvas/lolice', {
avatar: await conn.profilePictureUrl(who).catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png'),
}), '', '🍿ુ _\`ᴀ᪶۫۫\` \`ɴ᪶۫۫\` \`ɪ᪶۫۫\` \`ᴍ᪶۫۫\` \`ᴇ᪶۫۫\`_ ૂ🌹ᮬ᭄', m)
}

handler.help = ['lolice']
handler.tags = ['anime']
handler.command = /^(lolice)$/i
export default handler