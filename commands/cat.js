if (command === "cat") {
   const responsecat = await axios.get(
      `https://meme-api.herokuapp.com/gimme/cat`
   );
   client.privmsg(channel, `peepoDankSit 🐱 ${responsecat.data.url}`);
}
