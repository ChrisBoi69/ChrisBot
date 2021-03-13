const Discord = require('discord.js');

const client = new Discord.Client({
    partials: ["MESSAGE", "CHANNEL", "REACTION"]
});
const fetch = require('node-fetch')
const querystring = require('querystring')

const prefix = '-';

const fs = require('fs');
const mongoose = require('mongoose');
const memberCounter = require('./counters/member-counter');
const {
    execute
} = require('./commands/status');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(File => File.endsWith('.js'));
for (const File of commandFiles) {
    const command = require(`./commands/${File}`);

    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('Bee bot is online!')
    client.user.setActivity('ChrisBois server | -help', { type: 'WATCHING'}).catch(console.log);
    memberCounter(client);
});
client.on('guildMemberAdd', guildMember => {
    let Welcomerole = guildMember.guild.roles.cache.find(role => role.name === '😀| Members');

    guildMember.roles.add(Welcomerole);
    guildMember.guild.channels.cache.get('818764514283225099').send(`Welcome to ChrisBoi's server <@${guildMember.user.id}> have a great time!`);
});

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'help') {
        client.commands.get('help').execute(message, args, Discord);
    }
    if (command === 'clear') {
        client.commands.get('clear').execute(message, args);
    }
    if (command === 'status') {
        client.commands.get('status').execute(client, message, args);
    }
    if (command === 'ban') {
        client.commands.get('ban').execute(message, args);
    }
    if (command === 'kick') {
        client.commands.get('kick').execute(message, args);
    }
    if (command === 'meme') {
        client.commands.get('meme').execute(message, args);
    }
    if (command === 'mute') {
        client.commands.get('mute').execute(message, args);
    }
    if (command === 'unmute') {
        client.commands.get('unmute').execute(message, args);
    }
    if (command === 'helpstaff') {
        client.commands.get('helpstaff').execute(message, args, Discord);
    }
    if (command === 'helpfun') {
        client.commands.get('helpfun').execute(message, args, Discord);
    }
    if (command === 'reactionrole') {
        client.commands.get('reactionrole').execute(message, args, Discord, client);
}
if (command === 'tictactoe') {
    client.commands.get('tictactoe').execute(message, args, client);
}
if (command === 'rps') {
    client.commands.get('rps').execute(message, args, client);
}
if (command === 'translate') {
    client.commands.get('translate').execute(client, message, args);
}
if (command === 'suggest') {
    client.commands.get('suggest').execute(message, args, client, Discord);
}
if (command === 'helpbasic') {
    client.commands.get('helpbasic').execute(message, args, Discord);
}
if (command === 'chat') {
    client.commands.get('chat').execute(client, message, args);
}
if (command === 'boosters') {
    client.commands.get('boosters').execute(message, args, Discord);
}
if (command === 'qotd') {
    client.commands.get('qotd').execute(message, args, Discord);
}
if (command === 'wiki') {
    client.commands.get('wiki').execute(message, args, client);
}
if (command === 'ping') {
    client.commands.get('ping').execute(client, message, args);
}







client.on('message', async message =>{
    if(message.content.startsWith(`${prefix}whois` || `${prefix}userinfo`)){
        if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send('You don\'t have permssion to use this command')
        if(message.member.permissions.has('ADMINISTRATOR')){
                const target = message.mentions.users.first() || message.author

                const whois = new Discord.MessageEmbed()

                .setAuthor(`${target.username}`)
                .addField('Discord Name', `${target.username}`, true)
                .addField('Tag', `${target.discriminator}`, true)
                .addField('Joined Server Date', `${target.joinedAt}`, true)
                .addField('Account Creation Date', `${target.createdAt}`, true)
                .addField('Is bot?', `${target.bot}`, true)
                .addField('ID', `${target.id}`, true)
                .addField('FW', `${target.lastMessage}`, true)
                .setThumbnail(target.displayAvatarURL({dynamic: true}))
                .setColor('RANDOM')
                message.channel.send(whois)




        }
    }
})


});

client.login(process.env.token);