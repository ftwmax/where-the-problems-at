const ButtonPages = require('discord-button-pages');
const { MessageEmbed } = require('discord.js')
const disbutpages = require("discord-embeds-pages-buttons")
const Discord = require("discord.js");
require('@weky/inlinereply');
const disbut = require("discord-buttons");
const MessageButton = require("discord-buttons");
const { Trivia } = require('weky');
const { prefix, developerID } = require("../../config.json")

module.exports = {
  name: "trivia",

  description: "Information",

  run: async (client, message, args) => {
    await Trivia({message: message,
			embed: {
				title: `${message.author.username} | Trivia`,
				color: '#5865F2',
        footer: "Supreme Homies",
				timestamp: true,
			},
      thinkMessage: "Opeaing Trivia",
      loseMessage: "You answer is incorrect, Correct Answer was: **{{answer}}**",
      winMessage: "Noice, Answer was **{{answer}}**. You gave the correct answer in **{{time}}**"
		});
   
  
  
  },};