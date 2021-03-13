const Discord = require("discord.js");
const urban = require("relevant-urban");

module.exports = {
    name: 'urban',
    description: "Shows word definition",
    execute: async (client, message, args) => {
        if (!args[0]) return message.channel.send("Tell me what to define lol");

        let result = await urban(args[0]).catch(e => {
            return message.channel.send(`Sorry, i can't find the word **${args[0]}**, please try again later.`);
        })

        const embed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle(result.word)
        .setURL(result.urbanURL)
        .setDescription(`**Definition:** \n**${result.definition}** \n\n**Example:** \n**${result.example}**`)
        .addField("Author", result.author, true)
        .addField("Rating", `👍 ${result.thumbsUp.toLocaleString()} | 👎 ${result.thumbsDown.toLocaleString()}`)

        if (result.tags.length > 0 && result.tags.join(" ").length < 1024) {
            embed.addField("Tags", result.tags.join(", "), true);
        }

        return message.channel.send(embed);
    }
}