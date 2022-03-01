const request = require('node-superfetch');
const Color = "RANDOM";
const Discord = require("discord.js");
const disbut = require('discord-buttons');
const { MessageActionRow, MessageButton } = require("discord-buttons");
const { prefix, developerID, bot, support } = require("../../config.json")
const { tick } = require('../../JSON/emoji.json');


module.exports = {
  name: "help",
  description: "Info",

  run: async (client, message, args) => {


    const embed = new Discord.MessageEmbed()
    .setTitle(`${bot} Help`)
    .setDescription(`${tick} Hello **${message.author.username}**, \n *Choose an category below to see commands* \n\n :question: New to ${bot}? Check out server \n ${support} \n\n To find command aliases you have see usage after prefix. If there is no aliases of that command then there will be default command`)
    .setThumbnail(client.user.displayAvatarURL())
    .setColor("RANDOM")
    .setFooter(`Requested by: ${message.author.tag}`)


    const anime = new Discord.MessageEmbed()
    .setColor(Color)
    .setTitle(`Anime`)
    .setThumbnail(client.user.displayAvatarURL())
    .setDescription(`Here are all the anime commands: \n\n \`hug\`: **Usage**: \`${prefix}\`hug @user \n\n \`kiss\`: **Usage**: \`${prefix}\`kidd @user \n\n  \`lick\`: **Usage**: \`${prefix}\`lick @user \n\n \`pat\`: **Usage**: \`${prefix}\`pat @user \n\n \`bite\`: **Usage**: \`${prefix}\`bite @user \n\n \`feed\`: **Usage**: \`${prefix}\`feed @user \n\n \`purpose\`: **Usage**: \`${prefix}\`purpose @user`)
    .setFooter(`Requested by: ${message.author.tag}`)

    const fun = new Discord.MessageEmbed()
    .setColor(Color)
    .setTitle(`Fun`)
    .setThumbnail(client.user.displayAvatarURL())
    .setDescription(`Here are all the fun commands: \n\n \`snake\`: **Usage**: \`${prefix}\`snake \n\n \`fight\`: **Usage**: \`${prefix}\`fight \n\n \`rockpaperscissors\`: **Usage**: \`${prefix}\`rps @user \n\n \`quickclick\`: **Usage**: \`${prefix}\`qc \n\n \`wouldyourather\`: **Usage**: \`${prefix}\`wyb \n\n \`willyoupressthebutton\`: **Usage**: \`${prefix}\`wyb \n\n \`trivia\`: **Usage**: \`${prefix}\`trivia`)
    .setFooter(`Requested by: ${message.author.tag}`)


    const info = new Discord.MessageEmbed()
    .setColor(Color)
    .setTitle(`Info`)
    .setThumbnail(client.user.displayAvatarURL())
    .setDescription(`Here are all the Info commands: \n\n \`help\`: **Usage** \`${prefix}\`help \n\n \`invite\`: **Usage** \`${prefix}\`inv \n\n \`calculator\`: **Usage** \`${prefix}\`math \n \`${prefix}setpremium\` \`${prefix}rpremium\``)
    .setFooter(`Requested by: ${message.author.tag}`)


    const mod = new Discord.MessageEmbed()
    .setColor(Color)
    .setTitle(`Moderation`)
    .setThumbnail(client.user.displayAvatarURL())
    .setDescription(`Here are all the moderation commands: \n\n \`ban\`: **Usage** \`${prefix}\`ban <@user> <reason> \n\n \`kick\`: **Usage** \`${prefix}\`kick <@user> <reason> \n\n \`deletechannel\`: **Usage** \`${prefix}\`dc <#channel> <reason> \n\n \`deleterole\`: **Usage** \`${prefix}\`dr <@&role> <reason>`)
    .setFooter(`Requested by: ${message.author.tag}`)

    const eco = new Discord.MessageEmbed()
    .setColor(Color)
    .setTitle(`Economy`)
    .setThumbnail(client.user.displayAvatarURL())
    .setDescription(`Here are all the economy commands: \n\n \`bal\`: **Usage** \`${prefix}\`bal <@user optional> \n\n \`beg\`: **Usage** \`${prefix}\`beg \n\n \`dep\`: **Usage** \`${prefix}\`dep <amount or all> \n\n \`with\`: **Usage** \`${prefix}\`with <amount or all> \n\n \`rich\`: **Usage** \`${prefix}\`rich \n\n \`give\`: **Usage** \`${prefix}\`pay <@user> <amount> \n\n \`daily\`: **Usage** \`${prefix}\`daily \n\n \`search\`: **Usage** \`${prefix}\`search `)
    .setFooter(`Requested by: ${message.author.tag}`)

    let button1 = new MessageButton()
    .setLabel(`Anime`)
    .setID(`anime`)
    .setStyle("green");
    

    let button2 = new MessageButton()
    .setLabel(`Info`)
    .setID(`info`)
    .setStyle("green");

    let button3 = new MessageButton()
    .setLabel(`Mod`)
    .setID(`mod`)
    .setStyle("green");

    let button4 = new MessageButton()
    .setLabel(`Economy`)
    .setID(`eco`)
    .setStyle("green");

    let button5 = new MessageButton()
    .setLabel(`Fun`)
    .setID(`fun`)
    .setStyle("green");


    let row = new MessageActionRow()
    .addComponents(button1, button2, button3, button4, button5);



    const MESSAGE = await message.channel.send(embed, row);

    const filter = ( button ) => button.clicker.user.id === message.author.id 
    const collector = MESSAGE.createButtonCollector(filter, { time : 300000 });

    collector.on('collect', async (b) => {

        if(b.id == "anime") {

            MESSAGE.edit(anime, row);
            await b.reply.defer()
            
        }

         if(b.id == "fun") {

            MESSAGE.edit(fun, row);
            await b.reply.defer()
            
        }

        if(b.id == "info") {
            
            MESSAGE.edit(info, row);
            await b.reply.defer()

        }


        if(b.id == "mod") {
            
            MESSAGE.edit(mod, row);
            await b.reply.defer()

        }

        if(b.id == "eco") {
            
            MESSAGE.edit(eco, row);
            await b.reply.defer()

        }


    });


   
}};