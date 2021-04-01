const Item = require("./Item.js");

class ValtsHeadCostume extends Item {
    constructor(){
      super("Valt's Head Costume", null, null);
    }
    async use(client, message, args, prefix, iindex){
        message.channel.createMessage("This item can't be used. ||***FOR NOW*** at least. We don't know the future of this item but it will most likely remain unsuable.||");
    }
  }
  
  module.exports = ValtsHeadCostume;
