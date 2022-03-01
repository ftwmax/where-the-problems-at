const ButtonPages = require('discord-button-pages');
const { MessageEmbed } = require('discord.js')
const disbutpages = require("discord-embeds-pages-buttons")
const Discord = require("discord.js");
require('@weky/inlinereply');
const disbut = require("discord-buttons");
const MessageButton = require("discord-buttons");
const { WillYouPressTheButton } = require('weky');
const { prefix, developerID } = require("../../config.json")

module.exports = {
  name: "WillYouPressTheButton",
   aliases: ["wyb"],
  

  description: "Fun",

  run: async (client, message, args) => {

    
    await WillYouPressTheButton({message: message,
			embed: {
				title: `${message.author.username} |   WillYouPressTheButton`,
				color: '#5865F2',
        footer: "Supreme Homies",
				timestamp: true,
			},
      button: {
        yes: "Yeah",
        no: "Nope"
      },
      othersMessage: "Bruh, This is not your game. Type (prefix)wyb to play.",
      thinkMessage: "Generating Statements"
		});
   
  
  
  },};