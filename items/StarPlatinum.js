const Item = require("./Item.js");
const Discord = require("discord.js");

class StarPlatinum extends Item {
    constructor(){
        super("Star Platinum", Infinity)
    }
    async use(client, message, args, prefix, iindex){
        let embed = new Discord.MessageEmbed()
        .setThumbnail("https://static.wikia.nocookie.net/jjba/images/9/9c/StarPlatinum_Tower_of_Gray.png/revision/latest/scale-to-width-down/718?cb=20150613163210")
        .setImage("https://static.wikia.nocookie.net/jjba/images/4/47/StarPlatinum_A06.png/revision/latest/scale-to-width-down/1000?cb=20150217160056")
        .setTitle("Close-range Stand - Star Platinum")
        .setColor("#00c674")
        .setDescription("**\"Your dolphin is mine!\"**\n\n\`\`\`xl\nDamage+\nEnergy Charge+\nSemi time stop immunity\n\`\`\`")
        .setFooter(`${prefix}Attach stands to Beys to use them.`)

        message.channel.createMessage({embed:embed});
    }
    avatarStart(acted, victim, logger){
        victim.hp = Math.round(victim.hp/100*95);
    }
    avatarPassive(acted, victim, logger){
        acted.sp += 0.2;
        acted.atk = Math.round(acted.atk/100*105);
    }
}

module.exports = StarPlatinum;