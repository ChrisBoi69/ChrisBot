module.exports = {
    name: 'helpbasic',
    description: "Sends a list of basic commands you can use in chat",
    execute(message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#26ff00')
        .setTitle('Basic commands')
        .setDescription('These are basic commands you can use with ChrisBot')
        .addFields(
            {name: '**suggest**', value: '`You can suggest stuff by doing -suggest your suggestion`'},
            {name: '**ping**', value: '`Shows your the bots ping`'}
        ) 
        .setFooter('Make sure to put - before each command')

        message.channel.send(newEmbed);
    }
}