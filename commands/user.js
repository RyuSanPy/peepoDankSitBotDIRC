// USER INFO
try {
   if (command === "?") {
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
         } " Age: ${humanize(accountage, {
            largest: 3,
         })} `
      );
   }
} catch (e) {
   client.privmsg(channel, `peepoDankSit Couldn't find the user!`);
}
