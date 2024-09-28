import JavaScriptObfuscator from 'javascript-obfuscator'

let handler = async(m, { conn, text }) => {
if (!text) return m.reply(`∙۬◌⃘࣭ٜ࣪࣪࣪۬፝͜🍟᪶۫۫྆•≭ *Coloque el código js para ofuscar.*`) 
function obfuscateCode(code) {
  return JavaScriptObfuscator.obfuscate(code, { compact: false, controlFlowFlattening: true, deadCodeInjection: true, simplify: true, numbersToExpressions: true }).getObfuscatedCode();
}
let obfuscatedCode = await obfuscateCode(text);
conn.sendMessage(m.chat, {text: obfuscatedCode}, {quoted: m});
}
handler.help = ["ofuscar *<texto>*"];
handler.tags = ["fun"];
handler.command = /^(ofuscar|ofuscador)$/i
export default handler