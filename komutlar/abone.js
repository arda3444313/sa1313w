const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (client, message, args) => {
  if (!message.member.roles.cache.has("840723772906799105"))// Abone Sorumlusu id
    return message.channel.send(      
      `Bu komutu kullanabilmek için \`Developer\` rolüne sahip olmasınız.`
    );
  let kayıtsayı = db.fetch(`kayıtsayı_${message.author.id}`) || '0'

  let merziki = message.mentions.users.first();
  if (!merziki)
    return message.channel.send("Bir Kişiyi Etiketlemen Gerekiyor!");
  let rol = message.mentions.roles.first();
  let member = message.guild.member(merziki);
  member.roles.add("840724285562552351"); //abone rolü idsi
  let aboneembed = new Discord.MessageEmbed()
   .setTitle("・Kayıtlı Rolü Verildi")
        .setColor('#f0eb0e')
        .setDescription(`${message.author} **:** Abone Rolü Verme Sayısı: **${kayıtsayı ? `${kayıtsayı}` : "0"}**`)
        .addField("・Kayıt Eden Yetkili", `${message.author}`, true)
        .addField("・Kayıt olan Kullanıcı", `${merziki}`, true)
        .setColor("#7f00ff")
        .setTimestamp();

  let abonelog = client.channels.cache.get("793503171371597855")// abone log id
     if (!abonelog) return message.channel.send("Bu kanalda Kayıt Edilemez!");
    abonelog.send(aboneembed)
  db.add(`kayıtsayı_${message.author.id}`, 1)

};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["abone"],
  kategori: "sdasd",
  permLevel: 0
};

exports.help = {
  name: "a",
  description: "adsasd",
  usage: "a"
};