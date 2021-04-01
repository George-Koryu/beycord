const Discord = require("discord.js");

module.exports.run = async (client, message, args, prefix, player, db) => {
    let stats = await db.collection("users").findOne({_id: message.author.id});
    if(!stats) return message.reply(`you haven't started the game yet. Type \`${prefix}start\` to begin.`);
    if(!args[0]){
        if(!stats.launcher || stats.launcher === "default"){
            let hs = new Discord.MessageEmbed()
            .setTitle("Hand Spin")
            .setColor("#00c674")
            .setDescription("You hand spins.\n\n\`\`\`xl\nNo effects\n\`\`\`")
            .setFooter(`${prefix}lc for more interaction with launchers`);

            message.channel.createMessage({embed: hs});
        }else{
            let lc = new (client.items.get(stats.launcher.name))(stats.launcher);
            lc.use(client, message, args, prefix, player, db, 0);
        }
        return;
    }
    switch(args[0]){
        case "equip":
            if(stats.launcher !== "default") return message.channel.createMessage(`Please unequip your current launcher before continuing. You can do \`${prefix}lc unequip\` to unequip your current launcher.`)
            if(!args[1]) return message.channel.createMessage(`Please type \`${prefix}help launcher\` to know how to use this command properly.`);
            let index2 = parseInt(args[1])-1;
            let launcher2 = stats.items[index2];
            if(!launcher2 || !launcher2.name.toLowerCase().includes("launcher")) return message.channel.createMessage("No launcher found.");
            stats.items.splice(index2, 1);
            db.collection("users").updateOne({_id: message.author.id}, {$set: {launcher: launcher2, items: stats.items}});
            message.channel.createMessage(`Equipped ${launcher2.name} ${launcher2.var}!`);
        break;
        case "unequip":
            if(stats.launcher === "default" || !stats.launcher) return message.channel.createMessage(`You don't have any launcher equipped. You can do \`${prefix}lc equip\` to equip a launcher.`)
            stats.items.push(stats.launcher);
            db.collection("users").updateOne({_id: message.author.id}, {$set: {launcher: "default", items: stats.items}});
            message.channel.createMessage(`Unequipped ${stats.launcher.name} ${stats.launcher.var}!`);
        break;
        default:
            if(stats.launcher === undefined || stats.launcher === "default"){
                let hs = new Discord.MessageEmbed()
                .setTitle("Hand Spin")
                .setColor("#00c674")
                .setDescription("You hand spins.\n\n\`\`\`xl\nNo effects\n\`\`\`")
                .setFooter(`${prefix}lc for more interaction with launchers`);

                message.channel.createMessage({embed: hs});
            }else{
                let lc = new (client.items.get(stats.launcher.name))(stats.launcher);
                lc.use(client, message, args, prefix, player, db, iindex);
            }
    }
}

module.exports.help = {
    name: "launcher",
    aliases: ["lc"],
    desc: "Equip, unequip and view your launchers",
    usage: "launcher - View your current equipped launcher.\nlauncher equip <launcher index> - Equip a launcher.\nlauncher unequip - Unequip your equipped launcher if any."
}