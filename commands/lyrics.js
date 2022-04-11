const regex = require("./utils/regex.js");

function removeBanphrases(inputText) {
   inputText = inputText.replace(regex.racism, `[N-WORD]`);
   inputText = inputText.replace(regex.ip, `[IP]`);
   inputText = inputText.replace(regex.age, `[BANPHRASE]`);
   inputText = inputText.replace(regex.TosHunting, `[BANPHRASE]`);
   return inputText;
}

if (command === "lyrics") {
   if (!args[0]) return client.say(channel, `peepoDankSit that's not a song`);

   function splitResponse(str, n = 490) {
      let output = [];
      while (str.length > n) {
         let chunk = str.slice(0, n);
         if (!/\s$/.test(chunk)) {
            let temp = chunk.slice(chunk.lastIndexOf(" "));
            chunk = chunk.slice(0, chunk.lastIndexOf(" "));
            output.push([chunk.trim()]);
            str = temp + str.slice(n);
         } else {
            output.push([chunk.trim()]);
            str = str.slice(n);
         }
      }
      output.push([str]);
      return output;
   }
   const { statusCode, body: letra } = await got({
      url: `https://some-random-api.ml/lyrics?title=${encodeURIComponent(
         args.join(" ")
      )}`,
      responseType: "json",
      throwHttpErrors: false,
   });

   if (statusCode !== 200)
      return client.say(msg.channelName, "peepoDankSit not found");
   client.say(channel, `${letra.title} by ${letra.author}`);
   const data = removeBanphrases(letra.lyrics.replace(/\n|\r/g, " "));
   if (data.length > 500) {
      response = splitResponse(data);
      response.map((arr, i) =>
         setTimeout(() => {
            client.say(channel, arr.join(" "));
         }, i * 10)
      );
   }
}
