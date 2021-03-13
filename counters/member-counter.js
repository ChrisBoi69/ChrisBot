const { Client } = require("discord.js");

module.exports = async (client) =>{
    const guild = client.guilds.cache.get('815498513127047218');
    setInterval(() =>{
        const memberCount = guild.memberCount;
        const channel = guild.channels.cache.get('816232518939574282');
        channel.setName(`Total Members: ${memberCount.toLocaleString()}`);
        console.log('Updating member count');
    }, 150000);
}