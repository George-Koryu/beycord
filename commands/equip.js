module.exports.run = async (client, message, args, prefix, player, db) => {
  let stats = await db.collection("users").findOne({_id: message.author.id});
  if(!stats) return message.reply(`you haven't started the game yet. Type \`\`${prefix}start\`\` to begin.`);
  if(!stats.beys[args[0]-1]) return message.reply("undefined index number. Please try again.");
  stats.main = args[0]-1;
  db.collection("users").updateOne({_id: message.author.id}, {$set: {main: args[0]-1}});
  
  message.channel.createMessage(`✅Success! You've equipped ${stats.beys[args[0]-1].bbname || stats.beys[args[0]-1].name}.`);
}

module.exports.help = {
  name: "equip",
  aliases: ["e", "select"],
  cooldown: 1
}