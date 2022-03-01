const { MessageEmbed } = require("discord.js");
const db = require("quick.db");
const Discord = require('discord-reply')
const math = require("mathjs");

module.exports = {
    
        name: "deposit",
        aliases: ["dep"],
        category: "economy",
        description: "Deposits money to bank",
        usage: "<amount>",
        accessableby: "everyone"
    ,
    run: async (bot, message, args) => {

        let user = message.author;

        

        let bal = await db.fetch(`money_${user.id}`);

        if (bal === null) bal = 0;

        let member = await db.fetch(`money_${user.id}`)

        if (member === null) member = 0;

        let bsize = await db.fetch(`maxbank_${user.id}`)

        if (bsize === null) bsize = 0;

        let banka = await db.fetch(`bank_${user.id}`)

        if (banka === null) banka = 0;

       let m = args[0]

       if(!m) {
         return message.channel.send(`Please do dep all or dep <amount>`)
       }



         

        if (args[0] == 'all') {
            let money = await db.fetch(`money_${user.id}`)



           let z = math.evaluate(`${bsize} - ${banka}`);

           let y = math.evaluate(`${money} - ${banka}`);

           if (z < money) {
              db.subtract(`money_${user.id}`, z)
            db.add(`bank_${user.id}`, z)
                return message.lineReplyNoMention(`You have deposited ${z} freaking coins into your bank`)
            }

            if (z > money) {
              db.subtract(`money_${user.id}`, money)
            db.add(`bank_${user.id}`, money)
                return message.lineReplyNoMention(`You have deposited ${y} freaking coins into your bank`)
            }






            if (!money) return message.lineReplyNoMention(`Oops poor guy, You don't have  any money to deposit`)

            

        } else {

          let lol = args[0];

           let tot = math.evaluate(`${lol} + ${banka}`);


          if (tot > bsize) {
                return message.lineReplyNoMention(`${message.author.username}, You cant deposite more than bank size.`)
            }



            if (!args[0]) {
                return message.lineReplyNoMention(`You have ${bal} freaking coins in your purse. Specify amount of freaking coins you want to deposit.`)
                    .catch(err => message.channel.send(err.message))
            }

            if(isNaN(args[0])) {
                return message.lineReplyNoMention(`Oops, Your argument should be either a number and no more than what you have in your purse (${bal}), or \`all\``)
            
            }

            if (message.content.includes('-')) {
                return message.lineReplyNoMention(`Bruh, ${message.author.username} there is  freaking coins in negative`)
            }

            if (member < args[0]) {
                return message.lineReplyNoMention(`Yo ${message.author.username}, You dont have enough freaking coins to deposite.`)
            }

            if (message.content.includes('.')) {
                return message.lineReplyNoMention(`Amounts needs to be a whole number greater than 0`)
            }

            if (args[0] == '0') {
                return message.lineReplyNoMention(`Amounts needs to be a whole number greater than 0`)
            }




            message.lineReplyNoMention(`You have deposited \`${args[0]}\` freaking coins into your bank`)
            db.subtract(`money_${user.id}`, args[0])
            db.add(`bank_${user.id}`, args[0])

        }
    }
}