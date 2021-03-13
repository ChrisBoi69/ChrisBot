module.exports = {
    name: 'reactionrole',
    description: "Makes reactionrole option",
    async execute(message, args, Discord, client) {
        if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("You Dont Have The Permissions To Make A Reaction Role - [PREMISSIONS NOT HIGH ENOUGH]");
            const channel = '815657557271380038'
            const videoTeamRole = message.guild.roles.cache.find(role => role.name === "Video announcements");
            const serverTeamRole = message.guild.roles.cache.find(role => role.name === "Sever announcements");
            const giveawayTeamRole = message.guild.roles.cache.find(role => role.name === "Giveaway announcements");
            const qotdTeamRole = message.guild.roles.cache.find(role => role.name === "qotd");


            const videoTeamEmoji = '📹';
            const serverTeamEmoji = '📢';
            const giveawayTeamEmoji = '🎉';
            const qotdTeamEmoji = '❓';

            let embed = new Discord.MessageEmbed()
            .setColor('#f6ff00')
            .setTitle('Choose what color role you want')
            .setDescription('Choosing a color will make ur name in chat that color\n\n'
            + `${videoTeamEmoji} for video announcements\n`
            + `${serverTeamEmoji} for server announcements\n`
            + `${giveawayTeamEmoji} for giveaway announcements\n`
            + `${qotdTeamEmoji} for question of the day pings\n`);

            let MessageEmbed = await message.channel.send(embed);
            MessageEmbed.react(videoTeamEmoji);
            MessageEmbed.react(serverTeamEmoji);
            MessageEmbed.react(giveawayTeamEmoji);
            MessageEmbed.react(qotdTeamEmoji);

            client.on('messageReactionAdd', async (reaction, user) => {
                if (reaction.message.partical) await reaction.message.fetch();
                if (reaction.partical) await reaction.fetch();
                if (user.bot) return;
                if (!reaction.message.guild) return;

                if (reaction.message.channel.id == channel) {
                    if (reaction.emoji.name === videoTeamEmoji) {
                        await reaction.message.guild.members.cache.get(user.id).roles.add(videoTeamRole);
                    }
                    if (reaction.emoji.name === serverTeamEmoji) {
                        await reaction.message.guild.members.cache.get(user.id).roles.add(serverTeamRole);
                    }
                    if (reaction.emoji.name === giveawayTeamEmoji) {
                        await reaction.message.guild.members.cache.get(user.id).roles.add(giveawayTeamRole);
                    }
                    if (reaction.emoji.name === qotdTeamEmoji) {
                        await reaction.message.guild.members.cache.get(user.id).roles.add(qotdTeamRole);
                    }
                }else{
                    return;
                }
            });

            client.on('messageReactionRemove', async (reaction, user) => {
                if (reaction.message.partical) await reaction.message.fetch();
                if (reaction.partical) await reaction.fetch();
                if (user.bot) return;
                if (!reaction.message.guild) return;

                if (reaction.message.channel.id == channel) {
                    if (reaction.emoji.name === videoTeamEmoji) {
                        await reaction.message.guild.members.cache.get(user.id).roles.remove(videoTeamRole);
                    }
                    if (reaction.emoji.name === serverTeamEmoji) {
                        await reaction.message.guild.members.cache.get(user.id).roles.remove(serverTeamRole);
                    }
                    if (reaction.emoji.name === giveawayTeamEmoji) {
                        await reaction.message.guild.members.cache.get(user.id).roles.remove(giveawayTeamRole);
                    }
                    if (reaction.emoji.name === qotdTeamEmoji) {
                        await reaction.message.guild.members.cache.get(user.id).roles.remove(qotdTeamRole);
                    }
                }else{
                    return;
                }
            });
        }
    }