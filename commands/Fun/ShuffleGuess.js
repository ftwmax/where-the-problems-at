const ButtonPages = require('discord-button-pages');
const { MessageEmbed } = require('discord.js')
const disbutpages = require("discord-embeds-pages-buttons")
const Discord = require("discord.js");
require('@weky/inlinereply');
const disbut = require("discord-buttons");
const MessageButton = require("discord-buttons");
const { ShuffleGuess } = require('weky');
const { prefix, developerID } = require("../../config.json")

module.exports = {
  name: "ShuffleGuess",
   aliases: ["sg"],
  

  description: "Fun",

  run: async (client, message, args) => {

    
    await ShuffleGuess({message: message,
			embed: {
				title: `${message.author.username} |   ShuffleGuess`,
				color: '#5865F2',
        footer: "Supreme Homies",
				timestamp: true,
			},
      button: {
        reshuffle: "Shuffle",
        cancel: "Leave"
      },
      startMessage: "Guess a correct word  of **`{{word}}`**. You have **{{time}}** to find the correct word!",
      othersMessage: "Bruh, This is not your game. Type (prefix)sg to play.",
      thinkMessage: "Generating Word",
      loseMessage: "You answer is incorrect, Correct Answer was: **{{answer}}**",
      winMessage: "__*Yes*__, It was **{{word}}**! You gave the correct answer in **{{time}}.",
      time: 20000
		});
   
  
  
  },};