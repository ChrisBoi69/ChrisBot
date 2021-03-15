module.exports = {
    name: 'poll',
    description: "Creates a poll in the poll channel",
    execute(client, message, args) {
        
        const polls = args.slice(1).join(' ')

        const regex = polls.match(/"[^"]+"|[\\S]+"[^"]+/g)

        if(regex.length > 9) {
            return message.reply('Chill buddy, you can only have 9 poll options')
        }

        let str = ''

        let emojis = [
            '1️⃣',
            '2️⃣',
            '3️⃣',
            '4️⃣',
            '5️⃣',
            '6️⃣',
            '7️⃣',
            '8️⃣',
            '9️⃣'
        ]

        let i = 0

        for (const poll of regex) {
            str = str + `${emojis[i]} ${poll}\n\n`
            i++
        }

        const embed = new Discord.MessageEmbed()
        .setDescription(str.replace(/"/g, ''))

        const msg = await message.channel.send(embed)

        for(let i = 0; i < regex.length; i++) {
            msg.react(emojis[i])
        }
    }
}