const Discord = require("discord.js");
const Eris = require("eris");

module.exports.run = async (client, message, args, prefix, player, db) => {
  let stats = await db.collection("users").findOne({_id: message.author.id});
  if(!stats || stats == null) return message.reply(`you haven't started the game yet. Type \`\`${prefix}start\`\` to begin.`);
  let bey = stats.beys[stats.main];
  let examplec = client.beys.get(bey.name);
  let example = new examplec("1");
  if((!bey.sdchangable || bey.sdchangable === false) && example.sdchangable === true){
    bey.sdchangable = true;
    bey.sd = "Right"
    stats.beys[stats.main] = bey;
    db.collection("users").updateOne({_id: message.author.id}, {$set: {beys: stats.beys}});
    message.reply(`it seems like your ${stats.beys[stats.main].name} is outdated and it hasn't adapted to the new spin direction changing feature thing yet. Not to worry, I updated it for you! :wink: (Also, thanks for being an OG player because only OGs will have these kind of outdated Beys.)`);
    return;
  }
  if(!bey.sdchangable || bey.sdchangable === false) return message.reply(`The spin direction of ${bey.name} can't be changed.`);
  if(!bey.sd) bey.sd = 0;
  if(bey.sd === 0) bey.sd = 1;
  else if(bey.sd === 1) bey.sd = 0;
  else bey.sd = 0;
  stats.beys[stats.main] = bey;
  db.collection("users").updateOne({_id: message.author.id}, {$set: {beys: stats.beys}});
  let sds = ["Right", "Left"]
  message.channel.createMessage(`Spin direction for ${stats.beys[stats.main].name} changed to ${sds[bey.sd]}.`);
}
module.exports.help = {
  name: "switch",
  aliases: ["changesd", "switchsd", "sd"],
  desc: "Changes the Bey's spin direction. (if possible).",
  usage: "switch -- Read desc"
}
