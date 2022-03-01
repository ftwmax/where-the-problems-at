const request = require('node-superfetch');
const Color = "RANDOM";
const Discord = require("discord.js");
const disbut = require('discord-buttons');
const { MessageActionRow, MessageButton } = require("discord-buttons");
const db =require("quick.db");
const roasts = require('../../JSON/roast.json');
const { prefix, developerID } = require("../../config.json")

module.exports = {
  name: "purpose",
  description: "Fun",

  run: async (client, message, args) => {

    const line = args.slice(1).join(" ")

    let roast = roasts.roast[Math.floor((Math.random() * roasts.roast.length))];

const Member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;

    if(!args[1]) return message.channel.send(`Usage: \`${prefix}\`purpose @user <love line>`)

    if(Member.id === message.author.id) return message.channel.send(`You cant purpose yourself LMAO`)

  



    const embed = new Discord.MessageEmbed()
    .setColor(Color)
    .setTitle(`Purpose Request`)
    .setDescription(`<@${message.author.id}> had purpose **${Member.user.username}** \n Message: ${line} \n\n You wanna **ACCEPT** or **REJECT**`)
    .setThumbnail(encodeURI
    (`https://purrbot.site/img/sfw/smile/gif/smile_${roast}.gif?size=1024`))

    const accepted = new Discord.MessageEmbed()
    .setColor(Color)
    .setTitle(`${Member.user.username} had accept ${message.author.username} purpose request`)
    .setDescription(`Great, Now ${Member.user.username} and ${message.author.username} are girlfriend boyfriend \n Community: Have a best relationship.`)
    .setThumbnail(encodeURI
    (`https://purrbot.site/img/sfw/kiss/gif/kiss_${roast}.gif?size=1024`))

    let button1 = new MessageButton()
    .setLabel(`Accept`)
    .setID(`accept`)
    .setStyle("green");
    

    let button2 = new MessageButton()
    .setLabel(`Reject`)
    .setID(`reject`)
    .setStyle("red");

    let button3 = new MessageButton()
    .setLabel(`Accept`)
    .setID(`daccept`)
    .setDisabled()
    .setStyle("green");

    let button4 = new MessageButton()
    .setLabel(`Reject`)
    .setID(`dreject`)
    .setDisabled()
    .setStyle("red");

    let row = new MessageActionRow()
    .addComponents(button1, button2);

    let rows = new MessageActionRow()
    .addComponents(button3, button4);



    const MESSAGE = await message.channel.send(embed, row);

    const filter = ( button ) => button.clicker.user.id === Member.user.id 
    const collector = MESSAGE.createButtonCollector(filter);

    collector.on('collect', async (b) => {

        if(b.id == "accept") {

            MESSAGE.edit(accepted, rows);
            await b.reply.defer()
            
        }

        if(b.id == "reject") {
            
            MESSAGE.edit(`Shit <@${message.author.id}>, ${Member.user.username} has rejected your purpose. Tip: Make your face better you dumb guy`, rows);
            await b.reply.defer()

        }
    });


   
}};