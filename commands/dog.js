if (command === "dog") {
   const responsedog = await axios.get(
      `https://meme-api.herokuapp.com/gimme/dog`
   );
   client.privmsg(channel, `peepoDankSit 🐶 ${responsedog.data.url}`);
}
