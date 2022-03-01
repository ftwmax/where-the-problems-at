const db = require('quick.db');
const { MessageEmbed } = require("discord.js");
const { coin } = require('../../JSON/emoji.json');
module.exports = {
  
        name: "leaderboard",
        aliases: ['lb', `rich`],
        category: 'economy',
        description: 'Shows Server\'s Top 10 Players of Economy',
    run: async (bot, message, args) => {
        let money = db.all().filter(data => data.ID.startsWith(`money_`)).sort((a, b) => b.data - a.data);
        if (!money.length) {
            let noEmbed = new MessageEmbed()
                .setAuthor(message.member.displayName, message.author.displayAvatarURL())
                .setColor("RANDOM")
                .setFooter("Nothing is here!")
            return message.channel.send(noEmbed)
        };

        money.length = 10;
        var finalLb = "";
        for (var i in money) {
            if (money[i].data === null) money[i].data = 0
            finalLb += `**${money.indexOf(money[i]) + 1}. ${bot.users.cache.get(money[i].ID.split('_')[1]).tag}** - ${money[i].data} ${coin}\n`;
        };

        const embed = new MessageEmbed()
            .setTitle(`Global Rich players of ${bot.user.username} Bot`)
            .setColor("RANDOM")
            .setDescription(finalLb)
            .setFooter(bot.user.tag, bot.user.displayAvatarURL())
            .setTimestamp()
        message.channel.send(embed);
    }
};