const Item = require("./Item.js");
const command = require("NORTHPOLE COMMAND NOT HERE");

class Coal extends Item {
    constructor(){
        super("Coal", null, null)
    }
    async use(client, message, args, prefix, iindex){
        command.run(client, message, ["add"], prefix, player, db);
    }
}

module.exports = Coal;