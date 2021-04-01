module.exports.run = async (client, message, args, prefix, player, db) => {
    let stats = await db.collection("users").findOne({_id: message.author.id});
    if(!stats) return message.channel.createMessage(`You don't need to do this command if you don't even have your data registered. Type \`${prefix}start\` to get yourself registered in Beycord.`);
    db.collection("users").updateOne({_id: message.author.id}, {$set: {states: {inBattle: false, isTrading: false, isListing: false}}});
    message.channel.createMessage("Done! You should now be able to do commands once again.")
}

module.exports.help = {
    name: "resetstates",
    desc: "Reset your states data in case you are stuck in a battle or prompt.",
    usage: "resetstates - Does a thing said in the description.\n***IMPORTANT:*** If Beycord detects that you are actually still in the prompt or battle, Beycord will reset your data to its original (true) state.",
    cooldown: 600,
    aliases: ["resets"]
}
