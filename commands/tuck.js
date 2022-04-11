// Tuck command
if (command === "tuck") {
   if (!args[0])
      return client.privmsg(
         channel,
         `peepoDankSit you can only tuck a user to bed`
      );
   else
      client.privmsg(
         channel,
         `${user} tucks ${args[0]} into bed peepoDankSit 👉 🛏 `
      );
}
