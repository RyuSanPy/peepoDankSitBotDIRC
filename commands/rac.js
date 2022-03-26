const axios = require('axios');
exports.run =async (client, message, args, user, channel, self) => {
    const responserac = await axios.get(
      `https://meme-api.herokuapp.com/gimme/Raccoons`
    );
    client.privmsg(channel, `peepoDankSit 🦝 ${responserac.data.url}`);
  }