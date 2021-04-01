const Item = require("./Item.js");
const Discord = require("discord.js");

class Deathscyther extends Item {
    constructor(){
        super("Deathscyther (Avatar)", Infinity);
    }
    async use(client, message, args, prefix, iindex){
        let embed = new Discord.MessageEmbed()
        .setThumbnail("https://static.wikia.nocookie.net/beyblade/images/5/5d/Avatar_Deathscyther.png/revision/latest/scale-to-width-down/644?cb=20181219002841")
        .setImage("https://media.discordapp.net/attachments/794852011752292352/815121030884491274/deathscyther_480.gif")
        .setTitle("Attack Avatar - Deathscyther")
        .setColor("#00c674")
        .setDescription("**\"Nobody steps into my shadow...\"**\n\n\`\`\`xl\nDamage++\nDefense+\nStability Drop-\n\`\`\`")
        .setFooter(`${prefix}Attach avatars to Beys to use them.`)

        message.channel.createMessage({embed:embed});
    }
    avatarPassive(acted, victim, logger){
        acted.atk = Math.round(acted.atk/100*110);
        victim.atk = Math.round(victim.atk/100*92);
        acted.stability += 5;
    }
}

module.exports = Deathscyther;