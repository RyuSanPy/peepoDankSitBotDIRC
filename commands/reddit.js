if (command === "r/") {
   try {
      const responsereddit = await axios.get(
         `https://meme-api.herokuapp.com/gimme/${args[0]}`
      );
      if (responsereddit.data.nsfw === true) {
         return client.say(channel, `${user} nsfw post`);
      } else
         client.say(
            channel,
            `peepoDankSit r/${args[0]} post ${responsereddit.data.url}`
         );
   } catch (error) {
      client.say(channel, `Subreddit not found`);
   }
}
