if (command === "song") {
   const song = require("@allvaa/get-lyrics");
   const songwhip = `songwhip.com/create?q=${encodeURIComponent(
      args.join(" ")
   )}`;
   (async () => {
      const result = await song(`${args.join(" ")}`);
      try {
         client.say(
            channel,
            `${result.title} | Song: ${songwhip} | Genius: ${result.geniusUrl} | CoverArt: ${result.image}`
         );
      } catch (error) {
         client.say(channel, `Song not found FeelsBadMan`);
      }
   })();
}
