const ButtonPages = require('discord-button-pages');
const { MessageEmbed } = require('discord.js')
const disbutpages = require("discord-embeds-pages-buttons")
const Discord = require("discord.js");
require('@weky/inlinereply');
const disbut = require("discord-buttons");
const MessageButton = require("discord-buttons");
const { Snake } = require('weky');
const { prefix, developerID } = require("../../config.json")

module.exports = {
  name: "snake",

  description: "Fun",

  run: async (client, message, args) => {
    await Snake({message: message,
			embed: {
				title: `${message.author.username} | Snake Game`,
				color: '#5865F2',
        footer: "Beat the record",
				timestamp: true,
			},
      emojis: {
        food: ":banana:",
        snakeBody: ":green_square:",

      },
      buttonText: "Stop"
		});
   
  
  
  },};