const ms = require('ms');
module.exports = {
    name: 'mute',
    description: "Mutes a player for a specific amount of time",
    execute(message, args) {
        if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send("You Dont Have The Permissions To Mute Users lmao - [PREMISSIONS NOT HIGH ENOUGH]");
            const target = message.mentions.users.first();
            if(target) {
                let mainRole = message.guild.roles.cache.find(role => role.name === '😀| Members');
                let muteRole = message.guild.roles.cache.find(role => role.name === 'muted');

                let memberTarget = message.guild.members.cache.get(target.id);

                if(!args[1]) {
                    memberTarget.roles.remove(mainRole.id);
                    memberTarget.roles.add(muteRole.id);
                    message.channel.send(`<@${memberTarget.user.id}> Has been muted poggers`);
                    return
                }
                memberTarget.roles.remove(mainRole.id);
                memberTarget.roles.add(muteRole.id);
                message.channel.send(`<@${memberTarget.user.id}> Has been muted for ${ms(ms(args[1]))}`);

                setTimeout(function(){
                    memberTarget.roles.remove(muteRole.id);
                    memberTarget.roles.add(mainRole.id);
                }, ms(args[1]));
            } else {
                message.channel.send('Cant find that member!');
       }
    }
}