const Item = require("./Item.js");

class ShoeBack extends Item {
    constructor(){
      super("Shoe Back", null, null);
    }
    async use(client, message, args, prefix, iindex){
        message.channel.createMessage("Shu Back can't be used.");
    }
  }
  
  module.exports = ShoeBack;
