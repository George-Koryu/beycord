const Discord = require("discord.js");

module.exports.run = async (client, message, args, prefix, player, db) => {
    let stats = await db.collection("users").findOne({_id: message.author.id});
    if(!stats) return message.reply(`please start the game first and try again. Type \`${prefix}start\` to begin the game.`);
    if(args[0] && args[0].toLowerCase() === "enable"){
        if(!args[1]) return message.reply("please provide a setting that you would like to enable.");
        switch(args[1].toLowerCase()){
            case "battle":
                stats.settings.breqs = true;
                db.collection("users").updateOne({_id: message.author.id}, {$set: {settings: stats.settings}})
                message.channel.createMessage("Enabled battle requests!");
            break;
            case "trade":
                stats.settings.treqs = true;
                db.collection("users").updateOne({_id: message.author.id}, {$set: {settings: stats.settings}})
                message.channel.createMessage("Enabled trade requests!");
                break;
            case "inv":
                stats.settings.inv = true;
                db.collection("users").updateOne({_id: message.author.id}, {$set: {settings: stats.settings}})
                message.channel.createMessage("Enabled inventory viewing from others!");
                break;
            default: 
             message.channel.createMessage("Invalid option.");
        }
    }else if(args[0] && args[0] === "disable"){
        if(!args[1]) return message.reply("please provide a setting that you would like to disable.");
        switch(args[1].toLowerCase()){
            case "battle":
                stats.settings.breqs = false;
                db.collection("users").updateOne({_id: message.author.id}, {$set: {settings: stats.settings}})
                message.channel.createMessage("Disabled battle requests!");
            break;
            case "trade":
                stats.settings.treqs = false;
                db.collection("users").updateOne({_id: message.author.id}, {$set: {settings: stats.settings}})
                message.channel.createMessage("Disabled trade requests!");
                break;
            case "inv":
                stats.settings.inv = false;
                db.collection("users").updateOne({_id: message.author.id}, {$set: {settings: stats.settings}})
                message.channel.createMessage("Disabled inventory viewing from others!");
                break;
            default: 
             message.channel.createMessage("Invalid option.");
        }
    }else{
        let breqs;
        let treqs;
        let inv;
        if(stats.settings.breqs === true) breqs = ":white_check_mark:";
        else breqs = ":x:";
        if(stats.settings.treqs === true) treqs =  ":white_check_mark:";
        else treqs = ":x:";
        if(stats.settings.inv === true) inv = ":white_check_mark:";
        else inv = ":x:";
        let embed = new Discord.MessageEmbed()
        .setTitle("Settings")
        .setColor("#7f7fff")
        .setAuthor(message.author.username + "#" + message.author.discriminator, message.author.avatarURL)
        .setDescription(`Type \`${prefix}help settings\` to know what each setting means and how to configure them.\n\n**Battle:** ${breqs}\n**Trade:** ${treqs}\n**Inv:** ${inv}`);

        message.channel.createMessage({embed:embed});
    }
}

module.exports.help = {
    name: "settings",
    aliases: ["setting", "configself", "configureself"],
    usage: "settings - Shows your current settings\nsettings enable <setting> - Enables a setting\nsettings disable <setting> - Disables a setting\n\n__**Settings:**__\nbattle - Battle requests\ntrade - Trade requests\ninv - Allow others to see your inventory",
    desc: "Configure your settings."
}