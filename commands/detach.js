module.exports.run = async (client, message, args, prefix, player, db) => {
    let stats = await db.collection("users").findOne({_id: message.author.id});
    if(!stats) return message.reply(`you haven't started the game yet. Type \`${prefix}start\` to begin.`);
    if(!args[0]) return message.channel.createMessage(`Please type \`${prefix}help detach\` to know how to use this command.`);
    let bindex = parseInt(args[0])-1;
    if(isNaN(bindex)) return message.reply("indexes must be a number that can be found in your inventory.");
    let bey = stats.beys[bindex];
    if(!bey) return message.reply("no Bey found.");
    if(!bey.attached) return message.reply("that Bey doesn't have any item attached to it.");
    let itemname = bey.attached.name;
    let item = bey.attached;
    stats.beys[bindex].attached = null;
    db.collection("users").updateOne({_id: message.author.id}, {$set: {beys: stats.beys}, $push: {items: item}});
    message.channel.createMessage(`Successfully detached ${itemname} from ${bey.name}! The detached item can be found in your item inventory with the index \`${stats.items.length+1}\`.`)
}

module.exports.help = {
    name: "detach",
    aliases: ["d", "dtch"],
    desc: "Detach an item from a Bey.",
    usage: "detach <bey index>"
}