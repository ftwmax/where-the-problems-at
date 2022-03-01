const ytdl = require("ytdl-core")
const { Util, MessageEmbed } = require('discord.js');
const { GOOGLE_API_KEY } = require('../../config');
const YouTube = require("simple-youtube-api");
const youtube = new YouTube(GOOGLE_API_KEY);
const Discord = require("discord.js");
const disbut = require('discord-buttons');
const { MessageActionRow, MessageButton } = require("discord-buttons");
const queue2 = new Map();
const queue3 = new Map();
const queue = new Map();
module.exports = {
        name: 'leave',
        aliases: ['stop', 'dc'],
        category: 'music',
        description: 'Leaves The User\'s VC',
        usage: ' ',
        accessableby: 'everyone',
    run: async (bot, message, args) => {
       let ops = {
            queue: queue,
            queue2: queue2,
            queue3: queue3
        }
        const { channel } = message.member.voice;
        const serverQueue = ops.queue.get(message.guild.id);
try {
        if (!channel) return message.channel.send('You need To join **VC**');
        if (!message.guild.me.voice.channel) return message.channel.send('I already leaved VC');

        if (serverQueue || serverQueue.playing) {
          serverQueue.connection.dispatcher.end();
          await channel.leave();
          return message.channel.send(`I have left the voice channel ${channel}`);
        } else {
        await channel.leave();
        return message.channel.send(`I have left the voice channel ${channel}`);
        }
      } catch {
          serverQueue.connection.dispatcher.end();
          await channel.leave();
          return message.channel.send(`Oops, Please Try Again!`);
      }
    }
}