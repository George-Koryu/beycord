const Item = require("./Item.js");

class CNYProfileTheme extends Item {
    constructor(){
        super("CNY Profile Theme", null, null);
        this.binded = false;
        this.player = null;
    }
    async use(client, message, args, prefix, iindex){
        let stats = await db.collection("users").findOne({_id: message.author.id});
        if(stats.items[iindex] && stats.items[iindex].binded === true && stats.items[iindex].player !== message.author.id) return message.reply(`this theme applier is already binded to the player with ID ${stats.items[iindex].player}. Please get your own theme applier.`);
        if(args[1] === "bind"){
            if(stats.items[iindex].binded === true) return message.channel.createMessage("This theme applier is already binded.");
            stats.items[iindex].binded = true;
            stats.items[iindex].player = message.author.id;
            db.collection("users").updateOne({_id: message.author.id}, {$set: {items: stats.items}});
            return message.channel.createMessage("Theme applier binded!");
        }
        if(stats.items[iindex] && stats.items[iindex].binded === false) return message.reply(`please bind this theme applier to you first by doing \`${prefix}use ${iindex+1} bind\`. Binding ensures that you will be the only player that can use this theme applier.`);
        db.collection("users").updateOne({_id: message.author.id}, {$set: {theme: "CNY"}});
        message.channel.createMessage("✅CNY profile theme applied!");
    }
}

module.exports = CNYProfileTheme;