exports.run = (client, message, args, user, channel, self) => {
    for (let xd = 0; xd < args[0]; xd++) client.privmsg(channel, `/clear`);
  }