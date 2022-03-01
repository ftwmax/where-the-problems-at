const ButtonPages = require('discord-button-pages');
const { MessageEmbed } = require('discord.js')
const disbutpages = require("discord-embeds-pages-buttons")
const Discord = require("discord.js");
const disbut = require("discord-buttons");
const MessageButton = require("discord-buttons");
const { Calculator } = require('button-mod');
const { prefix, developerID } = require("../../config.json")

module.exports = {
  name: "calculator",
  aliases: ["math"],
  description: "Information",

  run: async (client, message, args) => {
    await Calculator({message: message,
			embed: {
				title: `${message.author.username} | Calculator`,
				color: '#5865F2',
        footer: "DC = Turn Off Calculator",
				timestamp: true,
			},
			disabledQuery: 'Calculator is off!',
			invalidQuery: 'The provided equation is invalid!',
			othersMessage: 'Only <@{{author}}> can use the buttons!',
		});
   
  
  
  },};