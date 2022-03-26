const lyrics = require('@alufi/lyrics-api');
const song = require("@allvaa/get-lyrics");
exports.run = async(client, message, args, user, channel, self) => {

  (async () => {
    const result = await song(`${args.join(" ")}`);
    console.log(result); // returns Song object
    try {
      client.say(channel, `${result.title} Genius: ${result.geniusUrl} Album cover: ${result.image}`);

      
      (async() => {
        try {
            const result = await lyrics.get(`${args.join(" ")}`);
            console.log(result); // get Lyrics
            client.say(channel, `Lyrics: WIP`);
          } catch(Error) {
            console.error(Error); // get Error
          }
        })();
        


    } catch (error) {
      client.say(channel, `Song not found FeelsBadMan`);
    }
  })();
};
