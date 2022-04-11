if (command === "rac") {
   const responserac = await axios.get(
      `https://meme-api.herokuapp.com/gimme/Raccoons`
   );
   client.privmsg(channel, `peepoDankSit 🦝 ${responserac.data.url}`);
}
