const Discord = require ('discord.js')
const { MessageEmbed } = require('discord.js')
const db = require("quick.db");

module.exports = {
name: "resett",
category: "moderation",
usage: "embed <text to say>",
description: "Returns provided text in Embed form.",
run: async(client, message, args) => {
  let user = message.author;

db.delete(`money_${user.id}`);
db.delete(`bank_${user.id}`);
db.delete(`maxbank_${user.id}`);

message.channel.send(`Done`)
}
}