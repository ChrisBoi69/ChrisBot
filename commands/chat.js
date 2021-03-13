const fetch = require("node-fetch");

module.exports = {
    name: 'chat',
    description: "Talks to the user with a chat AI",
    execute(client, message, args) {
        let mesg = args.join(" ");
        if (!mesg) return message.channel.send("Please say something.");
        fetch(`http://api.brainshop.ai/get?bid=155105&key=U33St1XmCsbmXCXo&uid=1&msg=${encodeURIComponent(mesg)}`)
        .then(res => res.json())
        .then(data => {
            message.channel.send(data.cnt);
        });
    }
}