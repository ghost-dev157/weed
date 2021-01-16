const Discord = require('discord.js');
const moment = require('moment');
moment.locale('pt-br')

module.exports = {
    config: {
        name: "botinfo",
        aliases: ['bot-info'],
        description: 'Mostra infos do bot!',
        example: ";botinfo",
        usage: ";botinfo"
    },
    run: async (client, message, args) => {
        const embed = new Discord.MessageEmbed()
            .setTitle(`BotInfo`)
            .setColor("RANDOM")
            .setThumbnail(client.user.displayAvatarURL())
            .setDescription(`Aqui você verá minhas informações!`)
            .addField(`Nome:`, `${client.user.username}`)
            .addField(`ID:`, `${client.user.id}`)
            .addField(`Criação:`, `${moment(client.user.createdTimestamp).format('LLL')}`)
            .addField(`Criador:`, `<@338173308958670849>`)

        message.channel.send(embed)
    }
}