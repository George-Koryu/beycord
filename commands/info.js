const Discord = require("discord.js");

module.exports.run = async (client, message, args, prefix, player, db) => {
  let stats = await db.collection("users").findOne({_id: message.author.id});
  if(stats.beys[args[0]-1]){
    let crntbey = stats.beys[args[0]-1];
    let reqxp = crntbey.level * 300;
  let lastxp = ((crntbey.level - 1) * 300);
  let xps = crntbey.xp - (lastxp);
  let difference = reqxp - crntbey.xp;
  let exps = xps + " / 300";
  if(crntbey.level == 100) exps = "**MAX LEVEL ACHIEVED**";
  let moves = "";
  if(crntbey.name == "Buddy Bey"){
    moves = crntbey.move;
  }else{
    let copy = new (client.beys.get(crntbey.name))("1", "1");
    copy.passives.forEach(passive => {
      moves += `${passive.name} [PASSIVE]\n`;
    });
    copy.specials.forEach(special => {
      moves += `${special.name}\n`;
    })
  }
  let embed = new Discord.MessageEmbed()
    .setColor("#7f7fff")
    .setTitle(`**${crntbey.bbname || crntbey.name}**`)
    .setThumbnail(crntbey.image)
    .setDescription(`**Level:** ${crntbey.level}\n**EXPs:** ${exps}\n**Total EXPs:** ${crntbey.xp}\n**Type:** ${crntbey.type}\n**ID:** ${crntbey.id || "No ID"}\n**OBID:** ${crntbey.firstOwner}`)
    .addField("Moves", moves || "???")
    .setAuthor(`${args[0]}/${stats.beys.length}`, message.author.avatarURL)
    .setFooter(`${difference} more EXPs required to reach Lvl${crntbey.level + 1}.`);
    if(difference <= 0) embed.setFooter("Levelling up at next message");
    if(crntbey.level >= ((crntbey.gen || 1)*20)) embed.setFooter("Awaiting upgrade")
  if(crntbey.level === 100) embed.setFooter("Level MAX");
  let generation = crntbey.gen || 1;
    switch(generation){
      case 1:
        embed.addField("Generation", "⭐");
        break;
      case 2:
        embed.addField("Generation", "⭐⭐");
        break;
      case 3:
        embed.addField("Generation", "⭐⭐⭐");
        break;
      case 4:
        embed.addField("Generation", "⭐⭐⭐⭐");
        break;
      case 5:
        embed.addField("Generation", "⭐⭐⭐⭐⭐");
        break;
    }
    if(crntbey.attached) embed.setDescription(`**Level:** ${crntbey.level}\n**EXPs:** ${exps}\n**Total EXPs:** ${crntbey.xp}\n**Type:** ${crntbey.type}\n**ID:** ${crntbey.id || "No ID"}\n**OBID:** ${crntbey.firstOwner}\n**Attached Item:** ${crntbey.attached.name}`);
    message.channel.createMessage({embed:embed});
  }else if(args[0] && args[0].toLowerCase() === "latest"){
    let crntbey = stats.beys[stats.beys.length - 1];
    let reqxp = crntbey.level * 300;
  let lastxp = ((crntbey.level - 1) * 300);
  let xps = crntbey.xp - (lastxp);
  let difference = reqxp - crntbey.xp;
  let exps = xps + " / 300";
  if(crntbey.level == 100) exps = "**MAX LEVEL ACHIEVED**";
  let moves = "";
  if(crntbey.name == "Buddy Bey"){
    moves = crntbey.move;
  }else{
    let copy = new (client.beys.get(crntbey.name))("1", "1");
    copy.passives.forEach(passive => {
      moves += `${passive.name} [PASSIVE]\n`;
    });
    copy.specials.forEach(special => {
      moves += `${special.name}\n`;
    })
  }
  let embed = new Discord.MessageEmbed()
    .setColor("#7f7fff")
    .setTitle(`**${crntbey.bbname || crntbey.name}**`)
    .setThumbnail(crntbey.image)
    .setDescription(`**Level:** ${crntbey.level}\n**EXPs:** ${exps}\n**Total EXPs:** ${crntbey.xp}\n**Type:** ${crntbey.type}\n**ID:** ${crntbey.id || "No ID"}\n**OBID:** ${crntbey.firstOwner}`)
    .addField("Moves", moves || "???")
    .setAuthor(`${stats.beys.length}/${stats.beys.length}`, message.author.avatarURL)
    .setFooter(`${difference} more EXPs required to reach Lvl${crntbey.level + 1}.`);
    if(difference <= 0) embed.setFooter("Levelling up at next message");
    if(crntbey.level >= ((crntbey.gen || 1)*20)) embed.setFooter("Awaiting upgrade")
  if(crntbey.level === 100) embed.setFooter("Level MAX");
  let generation = crntbey.gen || 1;
    switch(generation){
      case 1:
        embed.addField("Generation", "⭐");
        break;
      case 2:
        embed.addField("Generation", "⭐⭐");
        break;
      case 3:
        embed.addField("Generation", "⭐⭐⭐");
        break;
      case 4:
        embed.addField("Generation", "⭐⭐⭐⭐");
        break;
      case 5:
        embed.addField("Generation", "⭐⭐⭐⭐⭐");
        break;
    }
    if(crntbey.attached) embed.setDescription(`**Level:** ${crntbey.level}\n**EXPs:** ${exps}\n**Total EXPs:** ${crntbey.xp}\n**Type:** ${crntbey.type}\n**ID:** ${crntbey.id || "No ID"}\n**OBID:** ${crntbey.firstOwner}\n**Attached Item:** ${crntbey.attached.name}`);
    message.channel.createMessage({embed:embed});
    }else if(!args[0]){
      let crntbey = stats.beys[stats.main];
      let reqxp = crntbey.level * 300;
  let lastxp = ((crntbey.level - 1) * 300);
  let xps = crntbey.xp - (lastxp);
  let difference = reqxp - crntbey.xp;
  let exps = xps + " / 300";
  if(crntbey.level == 100) exps = "**MAX LEVEL ACHIEVED**";
  let moves = "";
  if(crntbey.name == "Buddy Bey"){
    moves = crntbey.move;
  }else{
    let copy = new (client.beys.get(crntbey.name))("1", "1");
    copy.passives.forEach(passive => {
      moves += `${passive.name} [PASSIVE]\n`;
    });
    copy.specials.forEach(special => {
      moves += `${special.name}\n`;
    })
  }
  let embed = new Discord.MessageEmbed()
    .setColor("#7f7fff")
    .setTitle(`**${crntbey.bbname || crntbey.name}**`)
    .setThumbnail(crntbey.image)
    .setDescription(`**Level:** ${crntbey.level}\n**EXPs:** ${exps}\n**Total EXPs:** ${crntbey.xp}\n**Type:** ${crntbey.type}\n**ID:** ${crntbey.id || "No ID"}\n**OBID:** ${crntbey.firstOwner}`)
    .addField("Moves", moves || "???")
    .setAuthor(`${stats.main+1}/${stats.beys.length}`, message.author.avatarURL)
    .setFooter(`${difference} more EXPs required to reach Lvl${crntbey.level + 1}.`);
    if(difference <= 0) embed.setFooter("Levelling up at next message");
    if(crntbey.level >= ((crntbey.gen || 1)*20)) embed.setFooter("Awaiting upgrade")
  if(crntbey.level === 100) embed.setFooter("Level MAX");
  let generation = crntbey.gen || 1;
    switch(generation){
      case 1:
        embed.addField("Generation", "⭐");
        break;
      case 2:
        embed.addField("Generation", "⭐⭐");
        break;
      case 3:
        embed.addField("Generation", "⭐⭐⭐");
        break;
      case 4:
        embed.addField("Generation", "⭐⭐⭐⭐");
        break;
      case 5:
        embed.addField("Generation", "⭐⭐⭐⭐⭐");
        break;
    }
    if(crntbey.attached) embed.setDescription(`**Level:** ${crntbey.level}\n**EXPs:** ${exps}\n**Total EXPs:** ${crntbey.xp}\n**Type:** ${crntbey.type}\n**ID:** ${crntbey.id || "No ID"}\n**OBID:** ${crntbey.firstOwner}\n**Attached Item:** ${crntbey.attached.name}`);
    message.channel.createMessage({embed:embed});
  }else{message.reply("no Bey found. Please check your spelling and try again.")}
}

module.exports.help = {
  name: "info",
  aliases: ["inf", "beyinfo", "beyinformation", "information"]
}