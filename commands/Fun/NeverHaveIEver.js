const ButtonPages = require('discord-button-pages');
const { MessageEmbed } = require('discord.js')
const disbutpages = require("discord-embeds-pages-buttons")
const Discord = require("discord.js");
require('@weky/inlinereply');
const disbut = require("discord-buttons");
const MessageButton = require("discord-buttons");
const { NeverHaveIEver } = require('weky');
const { prefix, developerID } = require("../../config.json")

module.exports = {
  name: "neverhaveiever",
   aliases: ["whie"],
  

  description: "Fun",

  run: async (client, message, args) => {

    
    await NeverHaveIEver({message: message,
			embed: {
				title: `${message.author.username} |   NeverHaveIEver`,
				color: '#5865F2',
        footer: "Supreme Homies",
				timestamp: true,
			},
      buttons: {
        optionA: "Yeah",
        optionB: "Nope"
      },
      othersMessage: "Bruh, This is not your game. Type (prefix)wyb to play.",
      thinkMessage: "Never Have I Ever"
		});
   
  
  
  },};