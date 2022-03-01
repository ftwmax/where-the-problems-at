const Color = "RANDOM";
const Discord = require("discord.js");
const disbut = require('discord-buttons');
const { MessageActionRow, MessageButton } = require("discord-buttons");
const { prefix, developerID } = require("../../config.json")
const db = require("quick.db")

module.exports = {
  name: "brr",
  aliases: ["brr"],
  category: "WELCOME",
  run: async(client, message, args) => {

     if (!message.member.hasPermission("ADMINISTRATION")) {
      return message.channel.send("You do not enough permission to use this command.");
    }

    const lll = new Discord.MessageEmbed()
    .setColor(Color)
    .setDescription(`**Documents you must know before using this command:** \n 1. You should fill all the args all are compulsory.\n 2. You cant add more than 4 and less than 4 buttons.\n 3. If bot donot respond then you have done mistake in your args.\n 4. You can add roleID in <button1role>, <button2role>, <button3role>, <button4role>. \n 5. Give space before and after \`|\` same as usage.  \n\n Usage:\n \`${prefix}\`br1 <embed description> | <button1name> | <button1role> | <button2name> | <button2role> | <button3name> | <button3role> | <button4name> | <button4role>`) 


    const ag = args.join(" ").split(" | ");
    if (!ag[0] || !ag[1] || !ag[2] || !ag[3] || !ag[4] || !ag[5] || !ag[6] || !ag[7] || !ag[8]) return message.channel.send(lll);

    const [first, second, third, fourth] = message.mentions.roles.keyArray();


  
   // This code is made by Supreme#2401
  db.set(`frolee_${message.guild.id}`, ag[2])
db.set(`srolee_${message.guild.id}`, ag[4])
db.set(`trolee_${message.guild.id}`, ag[6])
  db.set(`forolee_${message.guild.id}`, ag[8])


    const embed = new Discord.MessageEmbed()
    .setColor(Color)
    .setDescription(`${ag[0]}`)


    let button1 = new MessageButton()
    .setLabel(`${ag[1]}`)
    .setID(`rr1`)
    .setStyle("green");

    let button2 = new MessageButton()
    .setLabel(`${ag[3]}`)
    .setID(`rr2`)
    .setStyle("green");

    let button3 = new MessageButton()
    .setLabel(`${ag[5]}`)
    .setID(`rr3`)
    .setStyle("green");

    let button4 = new MessageButton()
    .setLabel(`${ag[7]}`)
    .setID(`rr4`)
    .setStyle("green");
    

    let row = new MessageActionRow()
    .addComponents(button1, button2, button3, button4);


     const MESSAGE = await message.channel.send(embed, row);

    const filter = async() => true
    const collector = MESSAGE.createButtonCollector(filter);

    

    collector.on('collect', async (b) => {

        if(b.id == "rr1") {
          
    let tfrolee = db.get(`frolee_${message.guild.id}`)
    let ttfrolee = message.guild.roles.cache.get(tfrolee);
 
         
          let take = message.member;
          take.roles.add(tfrolee);
          

            await b.reply.defer()
            
        }

         if(b.id == "rr2") {
          
   let tsrolee = db.get(`srolee_${message.guild.id}`)
    let ttsrolee = message.guild.roles.cache.get(tsrolee);
 
         
          let take = message.member;
          take.roles.add(tsrolee);
          

            await b.reply.defer()
            
        }

         if(b.id == "rr3") {
          
let ttrolee = db.get(`trolee_${message.guild.id}`)
    let tttrolee = message.guild.roles.cache.get(ttrolee);
 
         
          let take = message.member;
          take.roles.add(ttrolee);
          

            await b.reply.defer()
            
        }

         if(b.id == "rr4") {
          
    let tforolee = db.get(`forolee_${message.guild.id}`)
    let ttforolee = message.guild.roles.cache.get(tforolee);
 
         
          let take = message.member;
          take.roles.add(tforolee);
          

            await b.reply.defer()
            
        }

    });



  }
}