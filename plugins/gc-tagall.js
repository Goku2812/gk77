let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `*πΌπ΄π½ππ°πΉπ΄:* ${pesan}`
let teks = `πππππππ ππππππππππ\n\n ${oi}\n\n\n`
for (let mem of participants) {
teks += `β₯π@${mem.id.split('@')[0]}\n`}
teks += `β₯ *Ι’α΄α΄α΄ Κα΄α΄*\n\n*ππΌββπ βββπππππΈπ*`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['tagall <mesaje>','invocar <mesaje>']
handler.tags = ['group']
handler.command = /^(tagall|invocar|marcar|invocacion|todos|invocaciΓ³n)$/i
handler.admin = true
handler.group = true
export default handler
