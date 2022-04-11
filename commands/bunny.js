if (command === "bunny") {
   const responsebunny = await axios.get(
      `https://meme-api.herokuapp.com/gimme/rabbits`
   );
   client.privmsg(channel, `peepoDankSit 🐰 ${responsebunny.data.url}`);
}
