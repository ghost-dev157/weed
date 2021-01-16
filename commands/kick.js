const Discord = require('discord.js'); // vamos convidar um bot enquanto liga o nosso!

module.exports = {
    config: {
        name: "kick",
        aliases: ['kickar', 'expulsar'],
        description: "Expulse alguem!",
        example: ";kick @User#1000",
        usage: ";kick <user>"
    },
    run: async(bot, message, args) => {
        if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply('`você precisa de permissão para isso!`');
        if (!message.guild.me.hasPermission("KICK_MEMBERS")) return message.reply('`eu preciso de permissão para isso!`');

        let member = message.mentions.members.first() || message.guild.members.cache.get(args[1]);
        if (!member) return message.reply('mencione um membro por favor!');
        if (member === message.member) return message.reply('`você não pode se expulsar!`');

        let motivo = args.slice(1).join(" ");
        if (!motivo) return message.reply('`você precisa botar um motivo!`');

        let canal = message.guild.channels.cache.get('799151194600898570');

        canal.send(`*Membro Expulso: ${member}\nStaff: ${message.author}\nMotivo: ${motivo}*`)
        member.kick()
    }
}