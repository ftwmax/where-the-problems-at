const ButtonPages = require('discord-button-pages');
const { MessageEmbed } = require('discord.js')
const disbutpages = require("discord-embeds-pages-buttons")
const Discord = require("discord.js");
require('@weky/inlinereply');
const disbut = require("discord-buttons");
const MessageButton = require("discord-buttons");
const { LieSwatter } = require('weky');
const { prefix, developerID } = require("../../config.json")

module.exports = {
  name: "lieswatter",
   aliases: ["lsw"],
  

  description: "Fun",

  run: async (client, message, args) => {
    
    await LieSwatter({message: message,
			embed: {
				title: `${message.author.username} | LieSwatter`,
				color: '#5865F2',
        footer: "Supreme Homies",
				timestamp: true,
			},
      othersMessage: "Bruh, This is not your game",
      winMessage: "*WOW*, It was a **{{answer}}**. You got it correct in **{{time}}",
      time: 10000
		});
   
  
  
  },};