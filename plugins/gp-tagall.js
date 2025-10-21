let handler = async (m, { conn, text, participants, isAdmin, isOwner, groupMetadata }) => {
    const botNumber = conn.user.jid;
    const users = participants.map(u => u.id).filter(v => v !== conn.user.jid);
    if (m.sender !== botNumber && !isOwner && !isAdmin) {
        m.reply("🛡️ This command is only for *Group Admins*");
        return;
    }

    // Separate admins and members
    const admins = participants.filter(p => p.admin).map(p => p.id);
    const members = participants.filter(p => !p.admin).map(p => p.id);

    const groupInfo = `┃💗⊹ 𝗚𝗥𝗢𝗨𝗣 : *${groupMetadata.subject}*\n\n`;
    const membersInfo = `┃💗⊹ 𝗠𝗘𝗠𝗕𝗘𝗥𝗦 : *${participants.length}*${text ? `\n┃💗⊹ 𝗠𝗘𝗦𝗦𝗔𝗚𝗘 : ${text}\n` : ''}`;

    const adminMentions = admins.map(v => '┃💗⊹ 👑 @' + v.replace(/@.+/, '')).join`\n` || '┃💗⊹ None';
    const memberMentions = members.map(v => '┃💗⊹ 👥 @' + v.replace(/@.+/, '')).join`\n` || '┃💗⊹ None';

    const footer = '\n└──✪ ⚡𝑷-𝑴𝑫⚡ ┃ ᴮᴼᵀ ✪──';

    const tagMessage = `${groupInfo}${membersInfo}\n\n┌───⊷ 👑 *ADMINS*\n${adminMentions}\n\n┌───⊷ 👥 *MEMBERS*\n${memberMentions}${footer}`;

    // Combine all for mentions
    const allMentions = [...admins, ...members];

    m.reply(tagMessage, null, { mentions: allMentions });
};

handler.help = ['tagall'];
handler.tags = ['group'];
handler.command = ['tagall', 'invo'];
handler.admin = true;
handler.group = true;

export default handler;
