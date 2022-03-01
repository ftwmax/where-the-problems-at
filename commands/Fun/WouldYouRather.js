const ButtonPages = require('discord-button-pages');
const { MessageEmbed } = require('discord.js')
const disbutpages = require("discord-embeds-pages-buttons")
const Discord = require("discord.js");
require('@weky/inlinereply');
const disbut = require("discord-buttons");
const MessageButton = require("discord-buttons");
const { WouldYouRather } = require('weky');
const { prefix, developerID } = require("../../config.json")

module.exports = {
  name: "wouldyourather",
   aliases: ["wyr"],
  

  description: "Fun",

  run: async (client, message, args) => {

    
    await WouldYouRather({message: message,
			embed: {
				title: `${message.author.username} |   WouldYouRather`,
				color: '#5865F2',
        footer: "Supreme Homies",
				timestamp: true,
			},
      buttons: {
        optionA: "A",
        optionB: "B"
      },
      othersMessage: "Bruh, This is not your game. Type (prefix)wyr to play.",
      thinkMessage: "Generating Questions"
		});
   
  
  
  },};