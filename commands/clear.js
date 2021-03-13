module.exports = {
    name: 'clear',
    description: "Clears the amount of messages from the chat",
    async execute(message, args) {
        if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You Dont Have The Permissions To Delete Messages lmao - [MANAGE_MESSAGES]");
            if(!args[0]) return message.reply("Enter the amount of messages you wanna delete");
            if(isNaN(args[0])) return message.reply("Please enter a real number!");

            if(args[0] >100) return message.reply("The max amount of messages you can delete per command is 100!")
            if(args[0] <1) return message.reply("You must delete atleast one message")

            await message.channel.messages.fetch({limit: args[0]}).then(messages => {
                message.channel.bulkDelete(messages);
            });
        
            
        

    }
}