module.exports.run = async (client, message, args, prefix, player, db) => {
    let stats = await db.collection("users").findOne({_id: message.author.id});
    if(!stats) return message.reply(`it seems like you haven't started the game yet. Please type \`${prefix}start\` to begin.`);
    if(!args[0]) return message.reply("please provide the index number of the Bey you wish to star / unstar.");
    let index = parseInt(args[0])-1;
    if(!stats.beys[index]) return message.reply("no Bey found found. Please try again.");
    let bey = stats.beys[index];
    if(bey.starred && bey.starred === true){
        stats.beys[index].starred = false;
        db.collection("users").updateOne({_id: message.author.id}, {$set: {beys: stats.beys}});
        message.channel.createMessage(`✅ Successfully unstarred [${index+1}] ${bey.bbname || bey.name}.`);
    }else{
        stats.beys[index].starred = true;
        db.collection("users").updateOne({_id: message.author.id}, {$set: {beys: stats.beys}});
        message.channel.createMessage(`✅ Successfully starred [${index+1}] ${bey.bbname || bey.name}.`);
    }
}

module.exports.help = {
    name: "star",
    aliases: ["unstar", "fav", "addfav", "removefav"],
    desc: "Star or unstar a Bey.",
    usage: "star <bey index number> - Star or unstar that Bey."
}