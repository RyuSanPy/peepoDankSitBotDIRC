exports.run = (client, message, args, user, channel, self) => {
    client.privmsg(
      channel,
      `${user} tucks ${args[0]} into bed peepoDankSit 👉 🛏 `
    );
  }