const palabras = [
    "gato",
    "perro",
    "pájaro",
    "elefante",
    "tigre",
    "ballena",
    "mariposa",
    "tortuga",
    "conejo",
    "rana",
    "pulpo",
    "ardilla",
    "jirafa",
    "cocodrilo",
    "pingüino",
    "delfín",
    "serpiente",
    "leon",
    "mosquito",
    "abeja",
]

const intentosMaximos = 10

const gam = new Map()

function elegirPalabraAleatoria() {
return palabras[Math.floor(Math.random() * palabras.length)]
}

function ocultarPalabra(palabra, letrasAdivinadas) {
let palabraOculta = ""
for (const letra of palabra) {
if (letrasAdivinadas.includes(letra)) {
palabraOculta += letra
} else {
palabraOculta += "_"
}}
return palabraOculta
}

function mostrarAhorcado(intentos) {
const dibujo = [
" _ _ _ _",
" |  |",
intentos < 6 ? " |  O" : " |",
intentos < 5 ? " | /" : intentos < 4 ? " | / " : intentos < 3 ? " | / \\" : intentos < 2 ? " | / \\ " : " |",
intentos < 2 ? "_|_" : " |",
]
return dibujo.slice(0, intentosMaximos - intentos).join("\n")
}

function juegoTerminado(sender, mensaje, palabra, letrasAdivinadas, intentos) {
if (intentos === 0) {
gam.delete(sender)
return `> ∙۬◌⃘࣭ٜ࣪࣪࣪۬፝͜🍿᪶۫۫྆•≭ Perdiste!!! la palabra era : "${palabra}".\n\n${mostrarAhorcado(intentos)}`
} else if (!mensaje.includes("_")) {
gam.delete(sender)
return `> ∙۬◌⃘࣭ٜ࣪࣪࣪۬፝͜🍿᪶۫۫྆•≭ Ganaste!!! adivinaste la palabra : "${palabra}".`
} else {
return `${mensaje}\n\n${mostrarAhorcado(intentos)}`
}}
let handler = async (m, { conn }) => {
let users = global.db.data.users[m.sender]
if (gam.has(m.sender)) {
return conn.reply(m.chat, "> ∙۬◌⃘࣭ٜ࣪࣪࣪۬፝͜🍿᪶۫۫྆•≭ *El juego no termina todavía idiota, Terminalo para continuar.*", m)
}
let palabra = elegirPalabraAleatoria()
let letrasAdivinadas = []
let intentos = intentosMaximos
let mensaje = ocultarPalabra(palabra, letrasAdivinadas)
gam.set(m.sender, { palabra, letrasAdivinadas, intentos })
let ejemplo = `> ∙۬◌⃘࣭ٜ࣪࣪࣪۬፝͜🍿᪶۫۫྆•≭ *Bienvenida/o al juego del horcado!!!\n\n> ⛥ Palabra :\n${mensaje}\n\n> ⦫ *Intentos restantes :*\n${intentos}`
let instrucciones = `> ∙۬◌⃘࣭ٜ࣪࣪࣪۬፝͜🍿᪶۫۫྆•≭ *Ingrese solo una letra que estás adivinado..*`
conn.reply(m.chat,⸎ ejemplo + "\n\n" + instrucciones, m)
}

handler.before = async (m, { conn }) => {
let users = global.db.data.users[m.sender]
let juego = gam.get(m.sender)
if (!juego) return
let { palabra, letrasAdivinadas, intentos } = juego
if (m.text.length === 1 && m.text.match(/[a-zA-Z]/)) {
let letra = m.text.toLowerCase()
if (!letrasAdivinadas.includes(letra)) {
letrasAdivinadas.push(letra)
if (!palabra.includes(letra)) {
intentos--
}
}
let mensaje = ocultarPalabra(palabra, letrasAdivinadas)
let respuesta = juegoTerminado(m.sender, mensaje, palabra, letrasAdivinadas, intentos)
if (respuesta.includes("✵ ¡Perdiste!") || respuesta.includes("𐅊 ¡Ganaste!")) {
 conn.reply(m.chat, respuesta, m)
} else {
gam.set(m.sender, { palabra, letrasAdivinadas, intentos })
conn.reply(m.chat, respuesta + `\n\n> ∙۬◌⃘࣭ٜ࣪࣪࣪۬፝͜🍿᪶۫۫྆•≭ *Intentos restantes : ${intentos}*`, m)
}
} else {
let mensaje = ocultarPalabra(palabra, letrasAdivinadas);
let respuesta = juegoTerminado(m.sender, mensaje, palabra, letrasAdivinadas, intentos)
conn.reply(m.chat, respuesta, m)
gam.delete(m.sender)
}
}
handler.help = ['ahorcado']
handler.tags = ['game']
handler.command = ['ahorcado']
handler.register = true
export default handler