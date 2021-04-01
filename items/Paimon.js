const Item = require("./Item.js");

class Paimon extends Item {
    constructor(){
      super("Paimon", null, null);
    }
    async use(client, message, args, prefix, iindex){
        message.channel.createMessage("Oops! Looks like you got here late. The event ended some time ago. You can keep this item as a souvenir of some sort I guess.")
    }
  }
  
  module.exports = Paimon;
