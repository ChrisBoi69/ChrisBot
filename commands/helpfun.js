module.exports = {
    name: 'helpfun',
    description: "Sends a list of fun commands you can use in chat",
    execute(message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#26ff00')
        .setTitle('Fun commands')
        .setDescription('These are fun commands you can use with ChrisBot')
        .addFields(
            {name: '**meme**', value: '`Sends an epic gamer meme`'},
            {name: '**tictactoe**', value: '`Play tictactoe with others`'},
            {name: '**rps**', value: '`Play rock paper sizzors with the bot`'},
            {name: '**translate**', value: '`Translates any word you want`'},
            {name: '**wiki**', value: '`Searches specified word in the wiki`'}
        ) 
        .setFooter('Make sure to put - before each command')

        message.channel.send(newEmbed);
    }
}