exports.run = (client, message, args, user, channel, self) => {
    if (`${userlow}` === "ryusan_") {
      client.join(`${args[0].toLowerCase()}`);
      let content = " " + args[0].toLowerCase();
      fs.writeFile("channels.txt", content, { flag: "a+" }, (err) => {});
      client.me(
        channel,
        `${user}, entrando en el canal: "${args[0].toLowerCase()}" FeelsOkayMan`
      );
      client.privmsg(
        `${args[0].toLowerCase()}`,
        `peepoDankSit 🔔 @${args[0].toLowerCase()} Prefijo: peepoDankSit`
      );
    } else {
      if (channel === "peepoDankSitBot") {
        client.privmsg(
          channel,
          `${user}, espera a que el creador del bot revise tu solicitud SeemsGood`
        );
      } else {
        client.privmsg(
          channel,
          `${user}, este comando solo está disponible en el chat del bot DinkDonk`
        );
      }
    }
}