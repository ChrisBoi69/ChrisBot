module.exports = {
    name: 'kick',
    description: "Kicks the specified player",
    execute(message, args) {
        if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("You Dont Have The Permissions To Kick Users lmao - [KICK_MEMBERS]");
        const member = message.mentions.users.first();
        if(member) {
            const memberTarget = message.guild.members.cache.get(member.id);
            memberTarget.kick();
            message.channel.send("User has been kicked lol");
}
}
}