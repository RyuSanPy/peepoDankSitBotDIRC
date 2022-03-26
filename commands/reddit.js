const axios = require("axios");
try {
  exports.run = async(client, message, args, user, channel, self) => {
      const responsereddit = await axios.get(
        `https://meme-api.herokuapp.com/gimme/${args[0]}`
      );
      client.privmsg(
        channel,
        `peepoDankSit random r/${args[0]} post ${responsereddit.data.url}`
      );
    }
  } catch (e) {
    client.privmsg(channel, `peepoDankSit couldn't find the subreddit!`);
  }