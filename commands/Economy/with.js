const { MessageEmbed } = require("discord.js");
const db = require("quick.db");
const Discord = require('discord-reply')
const { coin } = require('../../JSON/emoji.json');

module.exports = {
    
        name: "withdraw",
        aliases: ["with"],
        category: "economy",
        description: "Withdraws Money From Bank",
        usage: "<amount>",
    
    run: async (bot, message, args) => {
        let user = message.author;

        let bank = await db.fetch(`bank_${user.id}`);

        let member2 = db.fetch(`bank_${user.id}`)

        if (args.join(' ').toLocaleLowerCase() == 'all') {
            let money = await db.fetch(`bank_${user.id}`)

            if (!money) return message.lineReplyNoMention(`You don't have any coins in bank to withdraw!`)
            db.subtract(`bank_${user.id}`, money)
            db.add(`money_${user.id}`, money)

            message.lineReplyNoMention(`You have withdrawn all your freaking coins from your bank`)

        } else {


            if (!args[0]) {
                return message.lineReplyNoMention(`You have ${bank} freaking coins, specify an amount to withdraw!`)
            }

            if(isNaN(args[0])) {
                return message.lineReplyNoMention(`Oops, Your argument should be either a number and no more than what you have in your bank (${bank}), or \`all\``)
            }

            if (message.content.includes('-')) {
                return message.lineReplyNoMention(`You can't withdraw negative money!`)
            }


            if (member2 < args[0]) {
                return message.lineReplyNoMention(`You don't have that much money in the bank!`)
            }


            message.lineReplyNoMention(`You have withdrawn ${args[0]} freaking coins from your bank!`)
            db.subtract(`bank_${user.id}`, args[0])
            db.add(`money_${user.id}`, args[0])
        }
    }
}