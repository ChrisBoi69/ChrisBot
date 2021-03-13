const { Message } = require("discord.js");

module.exports = {
    name: 'suggest',
    aliases: ['suggest', 'suggestion'],
    premissions: [],
    description: "Allows user to make a suggestion",
    execute(message, args, client, Discord) {
        const channel = message.guild.channels.cache.find(c => c.name === '📩│suggestions');
        if(!channel) return message.channel.send('suggestions channel dose not exist');

        let messageArgs = args.join(' ');
        const msg = message;
        const embed = new Discord.MessageEmbed()
        .setColor('ffff00')
        .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
        .setDescription(messageArgs);

        channel.send(embed).then((msg) => {
            msg.react('👍');
            msg.react('👎');
            message.delete();
        }).catch((err)=>{
            throw err;
        });
    }
}