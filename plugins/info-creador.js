let handler = async (m, { conn, usedPrefix, isOwner }) => {
let txt_owner = "> Hola, Este es el *numero* de mi *creadxr*, cualquier falla o si quieres agregar el bot a tu grupo, puedes *hablarle* ❀᭄ۣۜۜۜ\n\n ⋱ *+591 68683798* ⢫"
await conn.sendFile(m.chat, "https://f.uguu.se/yOLZnbAX.jpg', txt_owner, m, null, rcanal)
}
handler.help = ['owner']
handler.tags = ['main']
handler.command = ['owner', 'creator', 'creador', 'dueño'] 

export default handler