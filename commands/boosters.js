module.exports = {
    name: 'boosters',
    description: "Shows the benfits of boosting the server",
    execute(message, args, Discord) {
        if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("You Dont Have The Permissions To Ban Users lmao - [BAN_MEMBERS]");
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#a600ff')
        .setTitle('Booster benafits')
        .setDescription('These are all of the benafits server boosters get 💜')
        .addFields(
            {name: '**Custom command**', value: '`You will be able to get your own command on this bot and you can make it do anything you want`'},
            {name: '**Custom role**', value: '`You will get a role with any name you want + booster role`'},
            {name: '**Exclusive giveaways and events**', value: '`You will be able to particapate is special giveaways and events`'}
        ) 

        message.channel.send(newEmbed);
    }
}