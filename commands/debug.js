const Discord = require("discord.js");

module.exports.run = async (client, message, args, prefix, player, db) => {
    let stats = await db.collection("users").findOne({_id: message.author.id});
    if(!stats) return message.reply(`you haven't started the game yet. Please type \`${prefix}start\` to begin the game.`);
    if(!args[0]) return message.channel.createMessage(`Please type \`${prefix}help debug\` to learn how to use this command.`)
    let index = parseInt(args[0])-1;
    let bey = stats.beys[index];
    if(!bey) return message.reply("no Bey found.");
    if(args[1]){
        switch(args[1].toLowerCase()){
            case "image":
                let test = client.beys.get(bey.name);
                if(!test) return message.channel.createMessage(`That Bey's image cannot be updated.`);
                let tbey = new test("1", "1");
                stats.beys[index].image = tbey.image;
                db.collection("users").updateOne({_id: message.author.id}, {$set: {beys: stats.beys}});
                message.channel.createMessage("Image updated!");
            break;
            default:
                message.channel.createMessage("No debug option found.")
        }
        return;
    }
    let embed = new Discord.MessageEmbed()
    .setTitle(`Debugging ${bey.bbname || bey.name}`)
    .addField("Available actions", `[Awaken Image](${bey.image})\nUpdate Image (\`image\`)`)
    .setFooter("Beycord Debug Tool")
    .setColor("#7f7fff");
    message.channel.createMessage({embed: embed});
}

module.exports.help = {
    name: "debug",
    desc: "Debugs a Bey to find bugs and potentially fixes it.",
    usage: "debug <bey> - Debug a Bey.\ndebug <bey> <option> - Debug a Bey using a certain option.",
    aliases: ["unbug"]
}