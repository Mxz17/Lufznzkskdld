let handler = async (m, { conn, usedPrefix, isOwner }) => {
let txt_owner = "> ❆ᮬ᭄ *`"¡Hola! Soy ꪑאƺ, el creador y administrador de este bot. Estoy aquí para ayudarte y asegurarme de que tengas una experiencia óptima. ¿Necesitas ayuda o tienes sugerencias? No dudes en escribirme. Estoy aquí para ti."`*\n\n ᢀ `+56 9 8329 8345` ⸚"
await conn.sendFile(m.chat, "https://f.uguu.se/yAgPwLTQ.jpg", 'thumbnail.jpg', txt_owner, m, null, rcanal)
}
handler.help = ['owner']
handler.tags = ['main']
handler.command = ['owner', 'creator', 'creador', 'dueño'] 

export default handler