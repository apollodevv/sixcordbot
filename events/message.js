module.exports = async (client, message) => {
  const Discord = require('discord.js');
  const { prefix } = require('../config.js')

    if (!message.content.startsWith(prefix)) return;
  
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = client.commands.get(args.shift().toLowerCase());
  
    if (!command) return;
  
    if (command.requiredPerms && !message.member.hasPermission(command.requiredPerms)) {
      let msg = await message.channel.send(command.permError);
      msg.delete({ timeout: deletionTimeout });
      return message.react(reactionError);
    }
  
    command.execute(message, args, prefix);
}
