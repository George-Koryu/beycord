const Quest = require("./Quest.js");
let level = require("./LevelAWorldSprigganToLevel100.js");

class Collect1WorldSpriggan extends Quest {
    constructor(){
        super("[1] JoJo: Collect 1 World Spriggan", "<:valtz:665760587845861386>1000 and a Quest")
    }
    award(stats, db, index){
        let up = new level();
        stats.quests.splice(index, 1);
        stats.quests.push(up);
        db.collection("users").updateOne({_id: stats._id}, {$set: {quests: stats.quests, coins: stats.coins + 1000}});
    }
}

module.exports = Collect1WorldSpriggan;