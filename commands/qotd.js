module.exports = {
    name: 'qotd',
    description: "Sends the question of the day",
    execute(message, args, Discord) {
        if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send("You Dont Have The Permissions To Mute Users lmao - [PREMISSIONS NOT HIGH ENOUGH]");
        message.channel.send('@qotd')
        const newEmbed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('Question of the day.')
        .setDescription(`What's your favorite food?`)
        .addField('Answer in #❗│qotd-answers')
        .setFooter('Have a nice day or night!')

        message.channel.send(newEmbed);
    }
}