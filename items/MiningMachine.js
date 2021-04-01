const Item = require("./Item.js");

class MiningMachine extends Item {
    constructor(){
        super("Mining Machine", 150, Infinity);
    }
    async use(client, message, args, prefix, iindex){
        return message.channel.createMessage("The mining machine refused to function.");
        let stats = await db.collection("users").findOne({_id: message.author.id});
        let user = await db.collection("cny").findOne({_id: message.author.id});
        if(!user){
            await db.collection("cny").insertOne({_id: message.author.id, given: 0, received: 0, ingots: 0, balance: 0});
            user = {given: 0, received: 0, ingots: 0, balance: 0};
        }
        let cny = await db.collection("cny").findOne({_id: `c-${message.channel.id}`});
        if(!cny) return message.channel.createMessage(`Please check for the luck in this channel before proceeding the mine. Don't have a Luck Radar? Buy it in the shop or ask another fellow Miner to check for you.`);
        if(cny.miners.includes(message.author.id)) return message.reply("you already mined in this channel. Try mining in another channel or server.");
        let amt = 60;
        switch(cny.luck){
            case 1:
                amt = 10+Math.round(Math.random()*10);
            break;
            case 2:
                amt = 30+Math.round(Math.random()*10);
            break;
            case 3:
                amt = 50+Math.round(Math.random()*10);
            break;
            default:
                amt = 0;
        }
        stats.items.splice(iindex, 1);
        db.collection("users").updateOne({_id: message.author.id}, {$set: {items: stats.items}});
        db.collection("cny").updateOne({_id: message.author.id}, {$set: {ingots: user.ingots + amt}});
        db.collection("cny").updateOne({_id: `c-${message.channel.id}`}, {$push: {miners: message.author.id}});
        message.channel.createMessage(`You mined ${amt}<:gold_ingot:809245195777867796> from this channel. Better luck next time!`);
    }
}

module.exports = MiningMachine;