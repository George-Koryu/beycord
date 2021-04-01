const Item = require("./Item.js");
const Discord = require("discord.js");

class StormSpriggan extends Item {
    constructor(){
        super("Storm Spriggan (Avatar)", Infinity);
    }
    async use(client, message, args, prefix, iindex){
        let embed = new Discord.MessageEmbed()
        .setThumbnail("https://static.wikia.nocookie.net/beyblade/images/b/be/Avatar_Spriggan.png/revision/latest/scale-to-width-down/675?cb=20181219000851")
        .setImage("https://cdn.discordapp.com/attachments/692234599350140961/815140785514479616/Storm_Spriggan_Avatar.gif")
        .setTitle("Balance Avatar - Storm Spriggan")
        .setColor("#00c674")
        .setDescription("**\"Brain freeze. It's a thing.\"**\n\n\`\`\`xl\nDamage+\nDefense+\nStamina drop-\nHealth+\n\`\`\`")
        .setFooter(`${prefix}Attach avatars to Beys to use them.`)

        message.channel.createMessage({embed:embed});
    }
    avatarPassive(acted, victim, logger){
        acted.atk = Math.round(acted.atk/100*105);
        victim.atk = Math.round(victim.atk/100*90);
        acted.stamina += 0.35;
    }
    avatarStart(acted, victim, logger){
        acted.hp = Math.round(acted.hp/100*110);
    }
}

module.exports = StormSpriggan;