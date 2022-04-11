// Diferencia entre dos angulos
if (command === "dif") {
   if (!args[0])
      return client.privmsg(channel, `You need to specify 2 numbers`);
   if (isNaN(args[0]) || isNaN(args[1]))
      return client.privmsg(channel, `That is not a number`);
   return client.privmsg(
      channel,
      `peepoDankSit ${user} difference -> ${Math.abs(args[0] - args[1])}`
   );
}
