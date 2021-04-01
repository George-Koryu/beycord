const Item = require("./Item.js");

class RedPacket extends Item {
    constructor(){
        super("Red Packet", 1, null);
    }
    async use(client, message, args, prefix, iindex){
        return message.channel.createMessage("You better save it for next time.");
        let stats = await db.collection("users").findOne({_id: message.author.id});
        if(!args[1]) return message.channel.createMessage(`Here's how you use the red packet.\n\n\`${prefix}use ${iindex+1} <player> <valtz amount>\``);
        let user;
        if(message.mentions[0]) user = await message.guild.getRESTMember(message.mentions[0].id);
        else user = await message.guild.getRESTMember(args[1]);
        if(!user) return message.reply(`please type \`${prefix}\` to know how to use the Red Packet correctly.`);
        if(user.user.id === message.author.id) return message.reply("please don't give yourself the Red Packet, it's very sad to even think about it.");
        if(!args[2]) return message.reply(`please type \`${prefix}\` to know how to use the Red Packet correctly.`);
        let amt = parseInt(args[2]);
        if(isNaN(amt)) return message.reply("the amount of Valtz to give must be a number.");
        if(amt < 50) return message.reply("you must at least give <:valtz:665760587845861386>50.");
        if(amt > stats.coins) return message.reply("you don't even have that many Valtz.");
        let stats2 = await db.collection("users").findOne({_id: user.user.id});
        if(!stats2) return message.reply("that person isn't registered.");
        let cny = await db.collection("cny").findOne({_id: message.author.id});
        if(!cny){
            await db.collection("cny").insertOne({_id: message.author.id, given: 0, received: 0, ingots: 0, balance: 0});
            cny = {given: 0, received: 0, ingots: 0, balance: 0};
        }
        let cny2 = await db.collection("cny").findOne({_id: user.user.id});
        if(!cny2){
            await db.collection("cny").insertOne({_id: user.user.id, given: 0, received: 0, ingots: 0, balance: 0});
            cny2 = {given: 0, received: 0, ingots: 0, balance: 0};
        }
        let gold = Math.floor(amt/50);
        let dmchannel = await client.getDMChannel(user.user.id);
        stats.items.splice(iindex, 1);
        db.collection("users").updateOne({_id: message.author.id}, {$set: {coins: stats.coins - amt, items: stats.items}});
        db.collection("cny").updateOne({_id: message.author.id}, {$set: {given: cny.given + amt, ingots: cny.ingots + gold}});
        db.collection("cny").updateOne({_id: user.user.id}, {$set: {received: cny2.received + amt, balance: cny2.balance + amt}});
        dmchannel.createMessage(`:tada:**Happy Lunar New Year!!**:tada:\nYou received a <:valtz:665760587845861386>${amt} Red Packet from ${message.author.username}#${message.author.discriminator}! Be sure to give them a Red Packet too in return so you can earn <:gold_ingot:809245195777867796>Gold.\n\n*Red Packets are available for sale in the \`;shop\` with the low price of <:valtz:665760587845861386>1 and that's a great price!* You can also type \`;event\` to know more about the current LNY event.`);
        message.channel.createMessage(`You gave a <:valtz:665760587845861386>${amt} Red Packet to ${user.user.username}#${user.user.discriminator}. Thanks for being generous! ${gold}<:gold_ingot:809245195777867796> fell from the sky and hit your head then somehow conveniently lands in your pocket. *What.*`);
    }
}

module.exports = RedPacket;