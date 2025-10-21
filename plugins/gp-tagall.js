let handler = async (m, { conn, text, participants, isAdmin, isOwner, groupMetadata }) => {
  const botNumber = conn.user.jid

  // Get all participant IDs
  const users = participants.map(u => u.id).filter(v => v !== botNumber)

  // Separate admins and normal members
  const admins = participants.filter(p => p.admin !== null).map(p => p.id)
  const members = participants.filter(p => p.admin === null).map(p => p.id)

  // Build message
  const message = 
`▢ Group : *${groupMetadata.subject}*
▢ Total Members : *${participants.length}*
${text ? `▢ Message : ${text}\n` : ''}
┌───⊷ *ADMINS*
${admins.map(v => '▢ @' + v.replace(/@.+/, '')).join('\n') || '▢ None'}
└───────────────

┌───⊷ *MEMBERS*
${members.map(v => '▢ @' + v.replace(/@.+/, '')).join('\n') || '▢ None'}
└──✪ GURU ┃ ᴮᴼᵀ ✪──`

  // Reply and mention all
  m.reply(message, null, {
    mentions: [...admins, ...members],
  })
}

handler.help = ['tagall']
handler.tags = ['group']
handler.command = ['tagall']
handler.desc = 'Tag all group members separately (Admins & Members)'
handler.admin = true
handler.group = true

export default handler
