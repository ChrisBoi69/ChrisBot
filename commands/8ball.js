const { Client, Message, MessageEmbed, DiscordAPIError } = require('discord.js');

module.exports = {
    name: '8ball',
    description: 'Play 8ball minigame',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    execute: async(client, message, args) => {
        if(!args[0]) return message.channel.send('You did not specify a question');
        let respones = [
            "As I see it, yes.",
            "Ask again later.",
            "Better not tell you now.",
            "Cannot predict now.",
            "Concentrate and ask again.",
             "Don’t count on it.",
             "It is certain.",
             "It is decidedly so.",
             "Most likely.",
             "My reply is no.",
             "My sources say no.",
             "Outlook not so good.",
             "Outlook good.",
             "Reply hazy, try again.",
             "Signs point to yes.",
             "Very doubtful.",
             "Without a doubt.",
             "Yes.",
             "Yes – definitely.",
             "You may rely on it."
        ]
        let Response = respones[Math.floor(Math.random() * (respones.length))]
        const embed = new MessageEmbed()
        .setTitle(`8ball`)
        .setColor('RANDOM')
        .setDescription(`Your question: ${args[0]} \n My response: ${Response}`)
        message.channel.send(embed);
    
    }
}