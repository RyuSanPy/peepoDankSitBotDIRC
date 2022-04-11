// Stronghold distance
if (command === "dis") {
   //distancia del stronghold (1000/diferencia)<- division
   if (!args[0])
      return client.privmsg(channel, `You need to specify 2 numbers`);
   return client.privmsg(
      channel,
      `peepoDankSit ${user} Stronghold distance -> ${Math.abs(1000 / args[0])}`
   );
}
