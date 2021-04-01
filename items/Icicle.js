const Item = require("./Item.js");
const Discord = require("discord.js");
const ReactionHandler = require("eris-reactions")

class Icicle extends Item {
    constructor(){
        super("Icicle", null, null);
    }
    async use (client, message, args, prefix, iindex){
        let stats = await db.collection("users").findOne({_id: message.author.id});
        stats.items.splice(iindex, 1);
        let embed = new Discord.MessageEmbed()
        .setTitle("The Icicle melted after you shined it with LED light, revealing an oddly shaped arrow.")
        .setDescription("Keep it?")
        .setColor("#717fff");
        let msg = await message.channel.createMessage({embed: embed});
        msg.addReaction("✅");
        msg.addReaction("❌");
        let reactions = await ReactionHandler.collectReactions(
            msg,
            id => id === message.author.id,
            { maxMatches: 1, time: 300000 }
        ).catch(err => {
            message.channel.createMessage("Prompt cancelled due to timing out.");
        });
        if(reactions && reactions[0]){
            if (reactions[0].emoji.name === "✅") {
                db.collection("users").updateOne({_id: message.author.id}, {$set: {items: stats.items}});
                let embed2 = new Discord.MessageEmbed()
                .setTitle("You decided to keep it.")
                .setColor("#717fff");
                msg.edit({embed: embed2});
                setTimeout(() => {
                    let embed3 = new Discord.MessageEmbed()
                    .setTitle("You think you can keep something just because you can keep it? No, you don't. 'cause how can you keep something when it's gone. It disappeared the moment you looked at your hands...")
                    .setDescription("You decided to ignore it 'cause you have undone laundry.")
                    .setFooter("LOL")
                    .setColor("#7f7fff");
                    msg.edit({embed: embed3});
                }, 5000);
              } else if (reactions[0].emoji.name === "❌") {
                db.collection("users").updateOne({_id: message.author.id}, {$set: {items: stats.items}});
                let cancel = new Discord.MessageEmbed()
                  .setColor("#7f7fff")
                  .setTitle("You threw it away.")
                  .setDescription("You saw it vanish the moment it hit the ground.");
                msg.edit({ embed: cancel });
              } else {
                db.collection("users").updateOne({_id: message.author.id}, {$set: {items: stats.items}});
                let cancel2 = new Discord.MessageEmbed()
                  .setColor("#7f7fff")
                  .setTitle("You didn't do anything.")
                  .setDescription("The arrow grew legs and ran away.");
                msg.edit({ embed: cancel2 });
              }
        }else{
            db.collection("users").updateOne({_id: message.author.id}, {$set: {items: stats.items}});
                let cancel3 = new Discord.MessageEmbed()
                  .setColor("#7f7fff")
                  .setTitle("You didn't do anything.")
                  .setDescription("The arrow grew legs and ran away.");
                msg.edit({ embed: cancel3 });
        }
    }
}

module.exports = Icicle;