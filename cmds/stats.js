const Discord = require("discord.js");
const moment = require("moment");
const VERSION = "V1.1"
const CREATOR = "Cream Cray"

exports.run = async (bot, message, args) => {

          var uptime = moment.duration(bot.uptime).format(" D [Days], H [Hours], m [Minutes], s [Seconds]");
          var cpu = process.cpuUsage().system / 1024 / 1024
          var embed = new Discord.RichEmbed()
              .addField(`📑 Guilds / Servers :`, `${bot.guilds.size} Guilds / Servers`)
              .addField(`⛄️ Users :`, `${bot.users.size} Users`)
              .addField(`🕘 Uptime :`, `${uptime}`)
              .addField(`📺 Version :`, `${VERSION}`)
              .addField(`💾 Ram usage :`, `${(process.memoryUsage().rss / 1024 / 1024).toFixed(2)} MB`)
              .addField(`🔰 Creator : `, `${CREATOR}`)
.setColor("RANDOM")
.setFooter('©Beta')
          message.channel.send(embed)
}

exports.help = {
  name: "say"
}
