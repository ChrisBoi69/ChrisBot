module.exports = {
    name: 'helpstaff',
    description: "Sends a list of staff commands you can use in chat",
    execute(message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#ff0000')
        .setTitle('Staff commands')
        .setDescription('These are staff commands you can use with ChrisBot')
        .addFields(
            {name: '**Mute**', value: '`Mutes user for specific amount of time`'},
            {name: '**Unmute**', value: '`Unmutes user`'},
            {name: '**Ban**', value: '`Bans specified user`'},
            {name: '**Kick**', value: '`Kicks specified user`'},
            {name: '**Clear**', value: '`Clears specified amount of messages`'},
            {name: '**Status**', value: '`Sets bot status to anything you want`'}
        ) 
        .setFooter('Make sure to put - before each command')

        message.channel.send(newEmbed);
    }
}