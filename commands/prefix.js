const Discord = require("discord.js");

module.exports.run = async (client, message, args, prefix, player, db) => {
  message.channel.createMessage(`Beycord's prefix for this server is \`\`${prefix}\`\`. Enjoy playing!`);
}

module.exports.help = {
  name: "prefix",
  aliases: ["prfx"],
  usage: ""
}