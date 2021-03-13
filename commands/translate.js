const Discord = require("discord.js");
const translate = require("@k3rn31p4nic/google-translate-api");

module.exports = {
    name: 'translate',
    description: "Translates a word",
    execute: async (client, message, args) => {
    let language = args[0];
    let text = args.slice(1).join(" ")

    if (!language) return message.reply("What language do you want me to translate to?")
    if (language.length !==2) return message.reply("Language must be 2 letter alias. E.g `English > en https://www.science.co.il/language/Codes.php `")
    if (!text) return message.reply("What do you want me to translate?")

    const result = await translate(text, { to: language})
    const embed = new Discord.MessageEmbed()
        .setDescription(result.text)
        .setTitle("Google translate")
        .setTimestamp()
        .setFooter(message.author.username)
        .setColor("RED");

        message.channel.send(embed);
    }
}