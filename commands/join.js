const fs = require("fs-extra");
if (command === "join") {
   if (`${userlow}` === "ryusan_") {
      client.join(`${args[0].toLowerCase()}`);
      let content = " " + args[0].toLowerCase();
      fs.writeFile(
         "channels.txt",
         content,
         {
            flag: "a+",
         },
         (err) => {}
      );
      client.me(
         channel,
         `${user}, Entering to: "${args[0].toLowerCase()}" channel :D`
      );
      client.privmsg(
         `${args[0].toLowerCase()}`,
         `peepoDankSit 🔔 @${args[0].toLowerCase()} Prefix: peepoDankSit`
      );
   } else {
      if (channel === "peepoDankSitBot") {
         client.privmsg(channel, `${user}, Wait peepoDankSit`);
      } else {
         client.privmsg(
            channel,
            `${user}, This command only works in the bot chat peepoDankSit`
         );
      }
   }
}
