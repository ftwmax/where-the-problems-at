const request = require('node-superfetch');
const Color = "RANDOM";
const Discord = require("discord.js");
const disbut = require('discord-buttons');
const { MessageActionRow, MessageButton } = require("discord-buttons");
const roasts = require('../../JSON/roast.json');
const { prefix, developerID } = require("../../config.json")

module.exports = {
  name: "lick",
  description: "Anime",

  run: async (client, message, args) => {

    let roast = roasts.roast[Math.floor((Math.random() * roasts.roast.length))];

const Member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;

    if(!args[0]) return message.channel.send(`Usage: \`${prefix}\`lick @user`)

    if(Member.id === message.author.id) return message.channel.send(`You cant lick yourself LMAO`)



    const embed = new Discord.MessageEmbed()
    .setColor(Color)
    .setTitle(`Lick Request`)
    .setDescription(`Hey **${Member.user.username}**, <@${message.author.id}> want to lick you.`)

    const accepted = new Discord.MessageEmbed()
    .setColor(Color)
    .setTitle(`${message.author.username} gives a lick to ${Member.user.username}`)
    .setImage(encodeURI
    (`https://purrbot.site/img/sfw/lick/gif/lick_${roast}.gif`))

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
    const collector = MESSAGE.createButtonCollector(filter, { time : 300000 });

    collector.on('collect', async (b) => {

        if(b.id == "accept") {

            MESSAGE.edit(accepted, rows);
            await b.reply.defer()
            
            
        }

        if(b.id == "reject") {
            
            MESSAGE.edit(`Sorry <@${message.author.id}>, ${Member.user.username} has rejected your lick`, rows);
            await b.reply.defer()

        }
    });

    collector.on('end', (b) => {
        MESSAGE.edit(`Ohh shit, lick request or lick was ended`)
    })

   
}};