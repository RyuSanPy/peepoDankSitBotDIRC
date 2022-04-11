if (command === "yourmom") {
   const responsecat = await axios.get(
      `https://meme-api.herokuapp.com/gimme/cow`
   );
   client.privmsg(channel, `peepoDankSit ${responsecat.data.url}`);
}
