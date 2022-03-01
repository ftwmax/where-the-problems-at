const Discord = require("discord.js");
const db = require("quick.db")

module.exports = {
  name: "setcount",
  aliases: ["sc"],
  category: "Chatbot",
  run: async(client, message, args) => {


if(!message.member.hasPermission("ADMINISTRATION"))
{
  return message.channel.send(`${message.author.username} missing permission!`)

}

let channel = message.mentions.channels.first();

if(!channel) {
  return message.channel.send(`Mention a channel`)
}

db.set(`count_${message.guild.id}`, channel.id)

message.channel.send(`Counting channel will be ${channel}.`)

  }}