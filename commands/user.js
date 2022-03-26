const axios = require("axios")
const humanize = require("humanize-duration");
const myHumanizer = humanize.humanizer({
  language: "shortEs",
  languages: {
    shortEn: {
      y: () => "y",
      mo: () => "mo",
      w: () => "w",
      d: () => "d",
      h: () => "h",
      m: () => "m",
      s: () => "s",
      ms: () => "ms",
    },
  },
});

function humanizeTimestamp(date, converted) {
  let ms = date;
  if (!converted) ms = Date.now() - Date.parse(date);
  const options = {
    units: ["y", "mo", "d", "h", "m", "s"],
    largest: 3,
    round: true,
    conjunction: " y ",
    delimiter: ", ",
    spacer: "",
  };
  return myHumanizer(ms, options);
}
try {
  exports.run = async(client, message, args, user, channel, self) => {
      streamer = channel.replace("#", "");
      if (args[0]) {
        if (args[0].startsWith("@")) {
          args[0] = args[0].substring(1);
        }
        user = args[0];
      }

      const response = await axios.get(
        `https://api.ivr.fi/v2/twitch/user/${user}`
      );
      accountage = new Date().getTime() - Date.parse(response.data.createdAt);
      client.privmsg(
        channel,
        `User: @${response.data.displayName} Color: ${
          response.data.chatColor
        } id: ${response.data.id}, Bio: ${response.data.bio} Followers: ${
          response.data.followers
        }, Views: ${response.data.profileViewCount} Afilliate: ${
          response.data.roles.isAffiliate
        }, Partner: ${response.data.roles.isPartner}, Title:" ${
          response.data.lastBroadcast.title
        } " Age: ${humanize(accountage, { largest: 3 })} `
      );
    }
  } catch (e) {
    client.privmsg(channel, `Couldn't find the user!`);
  }