let handler = async(m, { isOwner, isAdmin, conn, text, participantes, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `*πΌπ΄π½ππ°πΉπ΄:* ${pesan}`
let teks = `πππππππ ππππππππππ\n\n ${oi}\n\n\n`
for (let mem of participants) {
teks += ` πβοΈ@${mem.id.split('@')[0]}\n`}
teks += `*β* πΆπΎπΊπ π±πΎπ\n\n*ππ€π πͺπ½π€π©*`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['tagall <mesaje>','invocar <mesaje>']
handler.tags = ['group']
handler.command = /^(tagall|invocar|invocacion|marcar|todos|invocaciΓ³n)$/i
handler.admin = true
handler.group = true
export default handler
