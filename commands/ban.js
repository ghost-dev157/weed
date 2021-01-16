const Discord = require('discord.js');

module.exports = {
    config: {
        name: "ban",
        aliases: ['banir', 'dar-ban'],
        description: "Bana um membro",
        example: ';ban @User#1000',
        usage: ';ban <user>'
    },
    run: async(bot, message, args) => {
        if (!message.member.hasPermission("BAN_MEMBERS")) return message.reply('você precisa de permissão para isso!');
        if (!message.guild.me.hasPermission("BAN_MEMBERS")) return message.reply('eu preciso de permissão para isso!');

        let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        if (!member) return message.reply('`você precisa mencionar um usuário por favor!`');
        if (member === message.member) return message.reply('você não pode se banir!');

        let motivo = args.slice(1).join(" ");
        if (!motivo) return message.reply('você precisa dar um motivo por favor!');

        let canal = message.guild.channels.cache.get('799151194600898570');

        canal.send(`Membro banido: ${member}\nStaff: ${message.author}\nMotivo: ${motivo}`);
        member.ban();
   }   }