const ButtonPages = require('discord-button-pages');
const { MessageEmbed } = require('discord.js')
const disbutpages = require("discord-embeds-pages-buttons")
const Discord = require("discord.js");
require('@weky/inlinereply');
const disbut = require("discord-buttons");
const MessageButton = require("discord-buttons");
const { QuickClick } = require('weky');
const { prefix, developerID } = require("../../config.json")

module.exports = {
  name: "quickclick",
   aliases: ["qc"],
  

  description: "Fun",

  run: async (client, message, args) => {
    
    await QuickClick({message: message,
			embed: {
				title: `${message.author.username} | QuickClick`,
				color: '#5865F2',
        footer: "Supreme Homies",
				timestamp: true,
			},
      buttons: {
        accept: "Play",
        deny: "Ignore"
      },
      othersMessage: "Bruh, This is not your game",
      winMessage: "*WOW*, <@{{winner}}> won!. How the freak?",
      time: 10000
		});
   
  
  
  },};