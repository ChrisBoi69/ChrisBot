module.exports = {
    name: 'ban',
    description: "Bans the specified player",
    execute(message, args) {
        if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("You Dont Have The Permissions To Ban Users lmao - [BAN_MEMBERS]");
        const member = message.mentions.users.first();
        if(member) {
            const memberTarget = message.guild.members.cache.get(member.id);
            memberTarget.ban();
            message.channel.send("User has been banned lol");
}
}
}