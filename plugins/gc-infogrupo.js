var handler = async (m, {conn, args, usedPrefix, command}) => {
const isClose = { 'open': 'not_announcement', 'close': 'announcement', 'abierto': 'not_announcement', 'cerrado': 'announcement', 'abrir': 'not_announcement', 'cerrar': 'announcement', 'desbloquear': 'unlocked', 'bloquear': 'locked' }[(args[0] || '')]
if (isClose === undefined) { return await conn.sendButton(m.chat, dev, '• > Como quieres configurar el grupo?.', wm, [
['𓂐 Abrir ✅', '.grupo abrir'],
['𓂐 Cerrar ❌', '.grupo cerrar'],
['𓂐 Menu᭄ 🍿', '.menu']], null, null, fakegif3)
}
await conn.groupSettingUpdate(m.chat, isClose)
{ 
conn.reply(m.chat, '✅ *Configurado correctamente*', m, rcanal, )
await m.react(done)
}}
handler.help = ['group abrir / cerrar']
handler.tags = ['grupo']
handler.command = /^(group|grupo)$/i
handler.admin = true
handler.botAdmin = true

export default handler