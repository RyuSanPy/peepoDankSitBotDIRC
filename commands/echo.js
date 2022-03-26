exports.run = async(client, msg, args, user, channel, self) => {
      client.say(channel, `${args.join(" ")}`)
  }