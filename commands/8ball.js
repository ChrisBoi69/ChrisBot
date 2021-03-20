const { Client, Message, MessageEmbed } = require('discord.js');

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
    }
}