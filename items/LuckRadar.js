const Item = require("./Item.js");

class LuckRadar extends Item {
    constructor(){
        super("Luck Radar", 100, null);
    }
    async use(client, message, args, prefix, iindex){
        return message.channel.createMessage("Signals of luck couldn't be detected.");
        let channel = await db.collection("cny").findOne({_id: `c-${message.channel.id}`});
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
        let msg = "";
        switch(channel.luck){
            case 0:
                msg = "Presence of NO luck has been detected in this channel.";
            break;
            case 1:
                msg = "Presence of *GOOD* luck has been detected in this channel.";
            break;
            case 2:
                msg = "Presence of **GREAT** luck has been detected in this channel.";
            break;
            case 3:
                msg = "Presence of ***INCREDIBLE*** luck has been detected in this channel.";
            default: 
                msg = "Presence of ***INCREDIBLE*** luck has been detected in this channel.";
        }
        message.channel.createMessage(msg);
    }
}

module.exports = LuckRadar;
