let handler = async (m, { conn, text, participants, isAdmin, isOwner, groupMetadata }) => {
    let users = participants.map(u => u.id).filter(v => v !== conn.user.jid)
    m.reply(`͏*╌─(▇▇) 💮 ̸̷̶   ٘ 〔 𝗆ᥱꪀ𝗍𝗂᥆ꪀ 〕 ‏‏‎‎╼──╮*\n\n𝐌𝖾𝗆𝖻𝖾𝗋 : *${participants.length}*${text ? `\n🌟 𝐌𝖾𝗌𝗌𝖺𝗀𝖾 : ${text}\n` : ''}\n` + users.map(v => '*𓈒  ▬᳢̅ ⃞ 🌟* @' + v.replace(/@.+/, '')).join`\n` + '\n *ׅ𒁴 ׄ֪﹝𝚻ɧᥱᥱꪀᲫ﹞֪ׄ* ', null, {
        mentions: users
    })
}

handler.help = ['tagall']
handler.tags = ['group']
handler.command = ['tagall']
handler.admin = false
handler.group = true

export default handler
