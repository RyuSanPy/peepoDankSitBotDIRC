const axios = require("axios")
exports.run = async(client, message, args, user, channel, self) => {
    const responsedog = await axios.get(
      `https://meme-api.herokuapp.com/gimme/dog`
    );
    client.privmsg(channel, `peepoDankSit 🐶 ${responsedog.data.url}`);
  }