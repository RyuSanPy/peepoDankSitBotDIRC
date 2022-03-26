exports.run = (client, message, args, user, channel, self) => {
    for (let xd = 0; xd < 30; xd++) client.privmsg(channel, `/clear`);
  }
