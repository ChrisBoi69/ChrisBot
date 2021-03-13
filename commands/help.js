const { TextChannel } = require("discord.js");

module.exports = {
    name: 'help',
    description: "Sends a list of commands you can use in chat",
    execute(message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#7D93C8')
        .setTitle('ChrisBot commands')
        .setDescription('These are commands you can use with ChrisBot')
        .addFields(
            {name: '**Basic commands**', value: '`-helpbasic`'},
            {name: '**Fun commands**', value: '`-helpfun`'},
            {name: '**Staff commands**', value: '`-helpstaff`'}
        ) 
        .setFooter('Make sure to put - before each command')

        message.channel.send(newEmbed);
    }
}