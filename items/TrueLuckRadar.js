const Item = require("./Item.js");

class TrueLuckRadar extends Item {
    constructor(){
        super("True Luck Radar", Infinity, 2);
    }
    async use(client, message, args, prefix, iindex){
        return message.channel.createMessage("Signals of luck couldn't be detected.");
        let channel = await db.collection("cny").findOne({_id: `c-${message.channel.id}`});
        let change = Math.floor(Math.random()*4);
        if(!channel){
            let luck = Math.floor(Math.random()*100);
            let l = 0;
            if(luck >= 95){
                l = 3;
            }else if(luck < 95 && luck >= 70){
                l = 2;
            }else if(luck < 70 && luck >= 40){
                l = 1;
            }
            await db.collection("cny").insertOne({_id: `c-${message.channel.id}`, miners: [], luck: l});
            channel = {miners: [], luck: l};
        }
        if(change == 0){
            let newluck = Math.floor(Math.random()*100);
            let newl = 0;
            if(newluck >= 95){
                newl = 3;
            }else if(newluck < 95 && newluck >= 70){
                newl = 2;
            }else if(newluck < 70 && newluck >= 40){
                newl = 1;
            }
            await db.collection("cny").updateOne({_id: `c-${message.channel.id}`}, {$set: {luck: newl}});
            channel = {miners: channel.miners, luck: newl};
        }
        let msg = "";
        switch(channel.luck){
            case 0:
                let real = Math.round(Math.random() * 40);
                msg = `Presence of ${real}% of luck has been detected in this channel. It seems too weak for any gold to be found. ${channel.miners.length} traces of Mining Machines are found.`;
            break;
            case 1:
                let real2 = Math.round(Math.random() * 30);
                msg = `Presence of ${40+real2}% of luck has been detected in this channel. A few bits of Gold might be present. ${channel.miners.length} traces of Mining Machines are found.`;
            break;
            case 2:
                let real3 = Math.round(Math.random() * 25);
                msg = `Presence of ${70+real3}% of luck has been detected in this channel. Golds are present. ${channel.miners.length} traces of Mining Machines are found.`;
            break;
            case 3:
                let real4 = Math.round(Math.random() * 5);
                msg = `Presence of ${95+real4}% of luck has been detected in this channel. A lot of Golds are guaranteed to be found! ${channel.miners.length} traces of Mining Machines are found.`;
            default:
                let real5 = Math.round(Math.random() * 5);
                msg = `Presence of ${95+real5}% of luck has been detected in this channel. A lot of Golds are guaranteed to be found! ${channel.miners.length} traces of Mining Machines are found.`;
        }
        message.channel.createMessage(msg);
    }
}

module.exports = TrueLuckRadar;
