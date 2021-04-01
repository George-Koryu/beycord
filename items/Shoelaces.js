const Item = require("./Item.js");

class Shoelaces extends Item {
    constructor(){
      super("Shoelaces", null, null);
    }
    async use(client, message, args, prefix, iindex){
        message.channel.createMessage("Shulaces can't be used.");
    }
  }
  
  module.exports = Shoelaces;
