const Quest = require("./Quest.js");
let zws = require("/path/to/beys/ZaWarudoSpriggan.js")

class LevelAWorldSprigganToLevel100 extends Quest {
    constructor(){
        super("[2] JoJo: Level a World Spriggan to Level 100", "<:valtz:665760587845861386>1000 and ***Za Warudo Spriggan***")
    }
    award(stats, db, index){
        let bey = new zws(stats._id);
        bey.level = 100;
        bey.xp = 30000;
        bey.gen = 5;
        stats.quests.splice(index, 1);
        db.collection("users").updateOne({_id: stats._id}, {$set: {quests: stats.quests, coins: stats.coins + 1000}, $push: {beys: bey}});
    }
}

module.exports = LevelAWorldSprigganToLevel100;