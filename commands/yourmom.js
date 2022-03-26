const axios = require("axios")
exports.run = async(client, message, args, user, channel, self) => {
    const responsecat = await axios.get(
      `https://meme-api.herokuapp.com/gimme/cow`
    );
    client.privmsg(channel, `peepoDankSit ${responsecat.data.url}`);
  }