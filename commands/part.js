const Discord = require("discord.js");
const Eris = require("eris");

module.exports.run = async (client, message, args, prefix, player, db) => {
  let stats = await db.collection("users").findOne({_id: message.author.id});
  if(!stats) return message.reply(`it seems like you haven't started the game yet. Type \`\`${prefix}start\`\` to begin.`);
  if(!args[0]) return message.reply("please provide the index of the part you wish to check from your inventory.");
  if(!stats.beyparts[parseInt(args[0])-1]) return message.reply("no Bey part found.")
  let part = stats.beyparts[parseInt(args[0])-1];
  let embed = new Discord.MessageEmbed()
  .setTitle(part.name + "'s Information")
  .addField("Type", part.type)
  .addField("Statistics", `\`\`\`\nAttack: ${part.stats.atk || 0}\nDefense: ${part.stats.def || 0}\nStamina: ${part.stats.stamina || 0}\n\`\`\``)
  .addField("Special Effects", `\`\`\`\nDamage: ${part.effects.atk || 0}\nStamina Steal: ${part.effects.ss || 0}\nHitpoints Recover: ${part.effects.hr || 0}\nDamage Block: ${part.effects.dmgb || 0}\n\`\`\``)
  .setThumbnail(part.image)
  .setColor("#7f7fff");
  message.channel.createMessage({embed: embed});
}

module.exports.help = {
  name: "part",
  aliases: ["partinfo", "pinf", "partinf", "pinfo", "partinformation"],
  desc: "Check for a Bey part's information.",
  usage: "part <part index from inventory>"
}