if (command === "ferret") {
   const responseFerret = await axios.get(
      `https://meme-api.herokuapp.com/gimme/ferrets`
   );
   client.privmsg(channel, `peepoDankSit ${responseFerret.data.url}`);
}
