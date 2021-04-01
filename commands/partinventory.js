const Discord = require("discord.js");

module.exports.run = async (client, message, args, prefix, player, db) => {
  let stats = await db.collection("users").findOne({_id: message.author.id});
  if(!stats) return message.reply(`it looks like you haven't started the game yet. Please type \`\`${prefix}\`\`start to begin the game.`);
  let page = parseInt(args[0]) || 1;
  let maxpages = Math.ceil(stats.beyparts.length / 25);
  if(maxpages < 1) maxpages = 1;
  if(page > maxpages || page < 1) return message.reply("page not found.");
  let drlist = "";
  let dilist = "";
  let dflist = "";
  let lwlist = "";
  let others = "";
  for(var i = (page-1)*25; i < (page-1)*25+25; i++){
    if(stats.beyparts[i]){
      let part = stats.beyparts[i];
      if(part.type === "Driver"){
        drlist += `**[${i+1}]:** ${part.name}\n`;
      }else if(part.type === "Disc"){
        dilist += `**[${i+1}]:** ${part.name}\n`;
      }else if(part.type === "Disc Frame"){
        dflist += `**[${i+1}]:** ${part.name}\n`;
      }else if(part.type === "Layer Weight"){
        lwlist += `**[${i+1}]:** ${part.name}\n`;
      }else{
        others += `**[${i+1}]:** ${part.name}\n`;
      }
    }
  }
  let embed = new Discord.MessageEmbed()
  .setTitle("Part Inventories")
  .setColor("7f7fff")
  .addField("Drivers", drlist || "This inventory is empty.")
  .addField("Discs", dilist || "This inventory is empty.")
  .addField("Disc Frames", dflist || "This inventory is empty.")
  .addField("Layer Weights", lwlist || "This inventory is empty.")
  .addField("Others", others || "There's no unsorted parts.")
  .setAuthor(message.author.username + "#" + message.author.discriminator, message.author.avatarURL)
  .setFooter(`PAGE ${page}/${maxpages}`)
  .setTimestamp();
  message.channel.createMessage({embed: embed});
}

module.exports.help = {
  name: "partinventory",
  aliases: ["partinv", "pinv", "parts"],
  desc: "View what Bey parts you have in your inventory.",
  usage: "partinventory - View the first page of the inventory.\npartinventory <page number> - View a page of the inventory."
}
