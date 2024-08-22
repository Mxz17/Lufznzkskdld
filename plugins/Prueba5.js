import fetch from 'node-fetch';
import axios from 'axios';
import translate from '@vitalets/google-translate-api';
import {Configuration, OpenAIApi} from 'openai';
const configuration = new Configuration({organization: global.openai_org_id, apiKey: global.openai_key});
const openaiii = new OpenAIApi(configuration);
const handler = async (m, {conn, text, usedPrefix, command}) => {
if (usedPrefix == 'a' || usedPrefix == 'A') return;
if (!text) return m.reply(`🤍 Ingrse su petición`) 
let syst = `Actuarás como un bot de WhatsApp, Tu nombre es Genesis-Bot y parece haber sido creado por Angel-OFC.`

if (command == 'ia2' || command == 'chatgpt') {
try {      
let gpt = await fetch(`https://deliriusapi-official.vercel.app/ia/gptweb?text=${text}`) 
let res = await gpt.json()
await m.reply(res.gpt)
} catch {
try {
let gpt = await fetch(`https://deliriusapi-official.vercel.app/ia/chatgpt?q=${text}`)
let res = await gpt.json()
await m.reply(res.data)
} catch {
}}}

if (command == 'gemini') {
let gpt = await fetch(`https://deliriusapi-official.vercel.app/ia/gemini?query=${text}`)
let res = await gpt.json()
await m.reply(res.message)
}

if (command == 'copilot' || command == 'bing') {
let gpt = await fetch(`https://deliriusapi-official.vercel.app/ia/bingia?query=${text}`)
let res = await gpt.json()
await m.reply(res.message)
}}
handler.help = ["gemini", "copilot"]
handler.tags = ["ai"]
handler.command = ['gemini', 'copilot']
export default handler;