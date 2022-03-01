const ButtonPages = require('discord-button-pages');
const { MessageEmbed } = require('discord.js')
const disbutpages = require("discord-embeds-pages-buttons")
const Discord = require("discord.js");
require('@weky/inlinereply');
const disbut = require("discord-buttons");
const MessageButton = require("discord-buttons");
const { RockPaperScissors } = require('weky');
const { prefix, developerID } = require("../../config.json")

module.exports = {
  name: "RockPaperScissors",
   aliases: ["rps"],
  

  description: "Fun",

  run: async (client, message, args) => {

    const target = message.mentions.members.first()

    if(!target) return message.channel.send(`Mention your opponent to play RockPaperScissors`)
    
    await RockPaperScissors({message: message,
    opponent: target,
			embed: {
				title: `${message.author.username} | RockPaperScissors`,
				color: '#5865F2',
        footer: "Supreme Homies",
				timestamp: true,
			},
      buttons: {
        accept: "Play",
        deny: "Ignore"
      },
      othersMessage: "Bruh, This is not your game",
      cancelMessage: "<@{{opponent}}> refused to play with you. I think they knows that they will lost the game",
      winMessage: "*WOW*, <@{{winner}}> won!. How the freak?",
      acceptMessage: "<@{{opponent}}>, <@{{challenger}}> wanna play Rock Paper and Scissors with you."
		});
   
  
  
  },};