const Item = require("./Item.js");
const Discord = require("discord.js");

class WinningValkyrie extends Item {
    constructor(){
        super("Winning Valkyrie (Avatar)", Infinity);
    }
    async use(client, message, args, prefix, iindex){
        let embed = new Discord.MessageEmbed()
        .setThumbnail("https://static.wikia.nocookie.net/beyblade/images/8/8f/BBC_Winning_Valkyrie_12_Volcanic_avatar.png/revision/latest/scale-to-width-down/511?cb=20190107223951")
        .setImage("https://media.discordapp.net/attachments/692234599350140961/815139230414143538/WinningValkyrie.gif")
        .setTitle("Attack Avatar - Winning Valkyrie")
        .setColor("#00c674")
        .setDescription("**\"Long time no see, huh?\"**\n\n\`\`\`xl\nDamage+++\nStamina Drop+\nQuick attack\n\`\`\`")
        .setFooter(`${prefix}Attach avatars to Beys to use them.`)

        message.channel.createMessage({embed:embed});
    }
    avatarPassive(acted, victim, logger){
        acted.atk = Math.round(acted.atk/100*130);
        acted.stamina -= 0.6;
    }
    avatarStart(acted, victim, logger){
        victim.atk -= Math.round(acted.atk/100*130);
    }
}

module.exports = WinningValkyrie;