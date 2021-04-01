const Item = require("./Item.js");

class ShoeFront extends Item {
    constructor(){
      super("Shoe Front", null, null);
    }
    async use(client, message, args, prefix, iindex){
        message.channel.createMessage("Shu Front can't be used.");
    }
  }
  
  module.exports = ShoeFront;
