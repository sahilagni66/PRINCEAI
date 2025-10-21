let handler = async (m, { conn, text, participants, isAdmin, isOwner, groupMetadata }) => {
  const botNumber = conn.user.jid

  // Get all participant IDs
  const users = participants.map(u => u.id).filter(v => v !== botNumber)

  // Separate admins and normal members
  const admins = participants.filter(p => p.admin !== null).map(p => p.id)
  const members = participants.filter(p => p.admin === null).map(p => p.id)

  // Build message
  const message = 
`𝐆𝗋ⱺυρ: *${groupMetadata.subject}*
𝐓α𝗍αᥣ 𝐌𝖾ꭑᑲ𝖾𝗋𝗌: *${participants.length}*
${text ? `𝐌𝖾𝗌𝗌𝖺𝗀𝖾: ${text}\n` : ''}
︵꯭፝֟⏜۫᷼︵ׅ𝐀ᑯꭑ𝗂𐓣𝗌︵꯭፝֟⏜۫᷼︵ׅ
${admins.map(v => '𓈒  ▬᳢̅ ⃞ 🌟 @' + v.replace(/@.+/, '')).join('\n') || '▢ None'}
𝐌⃝𝗂𐓣ᑯ 𝗒ⱺυ'𝗋𝖾 ⱺω𐓣 ᑲυ𝗌𝗂𐓣𝖾𝗌𝗌𓋜

͏██  ͏██ ͏.𝐌𝖾𝗆𝖻𝖾𝗋. ͏██  ͏██
${members.map(v => ' ━ ✦ ⃞🥮ᩧᩙᩪᩩ̶̷  ͟ ͟ ͟ ͟  @' + v.replace(/@.+/, '')).join('\n') || '▢ None'}
𝐌⃝𝗂𐓣ᑯ 𝗒ⱺυ'𝗋𝖾 ⱺω𐓣 ᑲυ𝗌𝗂𐓣𝖾𝗌𝗌𓋜`

  // Reply and mention all
  m.reply(message, null, {
    mentions: [...admins, ...members],
  })
}

handler.help = ['tagall']
handler.tags = ['group']
handler.command = ['tagall']
handler.desc = 'Tag all group members separately (Admins & Members)'
handler.admin = false
handler.group = true

export default handler
