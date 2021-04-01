const Discord = require("discord.js");

module.exports.run = async (client, message, args, prefix, player, db) => {
  let stats = await db.collection("users").findOne({_id: message.author.id});
  if(!stats) return message.reply(`it looks like you haven't started the game yet. Please type \`\`${prefix}\`\`start to begin the game.`);
  let page = parseInt(args[0]) || 1;
  let maxpages = Math.ceil(stats.items.length / 25);
  if(maxpages < 1) maxpages = 1;
  if(page > maxpages || page < 1) return message.reply("page not found.");
  let list = "";
  for(var i = (page-1)*25; i < (page-1)*25+25; i++){
    if(stats.items[i]){
      list += `**[${parseInt(i)+1}]:** ${stats.items[i].name}\n`;
    }
  }
  let embed = new Discord.MessageEmbed()
  .setTitle("Item Inventory")
  .setColor("7f7fff")
  .addField("Items", list || "This inventory is empty.")
  .setAuthor(message.author.username + "#" + message.author.discriminator, message.author.avatarURL)
  .setFooter(`PAGE ${page}/${maxpages}`)
  .setTimestamp();
  message.channel.createMessage({embed: embed});
}

module.exports.help = {
  name: "iteminventory",
  aliases: ["iteminv", "iinv", "items"],
  desc: "View your inventory of items",
  usage: "iteminventory <page number>"
}
