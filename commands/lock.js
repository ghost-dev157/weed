exports.run = async (client, message, args) => {
  const roleA = await message.guild.roles.cache.find(role => role.id === "799149838611775508"); 

  if (
    !message.member.roles.cache.some(r =>
      [
        "799151070143971398",
        "799151070919917578",
        "799151071234752514"
      ].includes(r.id) )) {
    return message.channel.send(`${message.author.username} So adm pode usar esse comando vacilão.`);
  } else if (message.content.includes("1")) {
    await roleA.setPermissions(67109889).catch(console.error);//permissoes quando ativo

    await message.channel.send(`Canais bloqueados por ${message.author.username}`);
  } else if (message.content.includes("2")) {
    await roleA.setPermissions(70769729).catch(console.error);//permissoes quando desativado

    await message.channel.send(
      `Canais desbloqueado por ${message.author.username}`);
  } else {
    return message.channel.send(`${message.author.username} 1 = on // 2 = off`);
  }
};