const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async (client, message, args, prefix, player, db) => {
  let stats = await db.collection("users").findOne({_id: message.author.id});
  let shopdisplay = new Discord.MessageEmbed()
  .setTitle("**SHOP**")
  .setDescription(`To purchase an item, use the \`${prefix}purchase\` command.`)
  .setColor("7f7fff")
  .addField("**[1]:** Buddy Bey Kit", "Make a Buddy Bey with this awesome kit. | Price: <:valtz:665760587845861386>20000 / <:goldenvaltz:711477657824526418>1", true)
  .addField("**[2]:** x1.5 EXP Booster 1 Hour", "Boost your EXP earn rate using this booster. | Price: <:valtz:665760587845861386>3999", true)
  .addField("**[3]:** Toolbox", "Fix a broken Bey using the Toolbox. | Price: <:valtz:665760587845861386>250", true)
  .addField("**[4]:** Perfect Constructor", "Construct a Perfect Phoenix with a 85% fail rate. | Price: <:valtz:665760587845861386>2000", true)
  .addField("**[5]:** 3 Premium Tickets Chest", "Gives you 3<:premiumgt:764101241004752896>. | Price: <:goldenvaltz:711477657824526418>1", true)
  .addField("**[6]:** 10 Premium Tickets Chest", "Gives you 10<:premiumgt:764101241004752896>. | Price: <:goldenvaltz:711477657824526418>3", true)
  .addField("**[7]:** 35 Premium Tickets Chest", "Gives you 35<:premiumgt:764101241004752896>. | Price: <:goldenvaltz:711477657824526418>10", true)
  .addField("**[8]:** Void Meat", "Raw meat acquired from the mythical dragon Void, the guardian of \"The Roll\". Can be fed to Void and he will allow you to use \"The Roll\" to roll amazing prizes. | Price: <:valtz:665760587845861386>1000", true)
  .addField("**[9]:** Gift Box", "Self-explanatory LOL. | Price: <:valtz:665760587845861386>1")
  .addField("**[10]:** Avatar Embryo", "Raise an avatar. | Price: <:valtz:665760587845861386>1999")
  .addField("**[11]:** BeyLauncher LR", "Just your average leftright string launcher. | Price: <:valtz:665760587845861386>1499")
  .setFooter(`Valtz: ${stats.coins} | GV: ${stats.gv}`)
  .setTimestamp();
  
  message.channel.createMessage({embed:shopdisplay});
}

module.exports.help = {
  name: "shop",
  aliases: ["s"]
}