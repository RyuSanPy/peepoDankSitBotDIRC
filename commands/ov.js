const axios = require("axios")
exports.run = async(client, message, args, user, channel, self) => {
    const axios = require("axios");
    streamer = channel.replace("#", "");
    if (args[0]) {
      if (args[0].startsWith("@")) {
        args[0] = args[0].substring(1);
      }
      streamer = args[0];
    }
    let chatters = await axios.get(
      `https://tmi.twitch.tv/group/user/${streamer}/chatters`
    );
    let chattercount = chatters.data["chatter_count"];
    client.privmsg(
      channel,
      `peepoDankSit There are currently ${chattercount} users in that chat.`
    );
  }