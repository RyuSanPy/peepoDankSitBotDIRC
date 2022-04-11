if (command === "cute") {
   let randomCute = [
      `Rabbits`,
      `Raccoons`,
      `dog`,
      `cats`,
      `cat`,
      `IllegallySmolCats`,
      `aww`,
      `Hedgehogs`,
      `ferrets`,
      `duck`,
   ];
   let cuteRandom = randomCute[Math.floor(Math.random() * randomCute.length)];
   const responsecute = await axios.get(
      `https://meme-api.herokuapp.com/gimme/${cuteRandom}`
   );
   client.say(
      channel,
      `peepoDankSit r/${cuteRandom} post ${responsecute.data.url}`
   );
   try {
   } catch (error) {
      client.say(channel, `peepoDankSit error`);
   }
}
