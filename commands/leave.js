const fs = require("fs-extra");

if (command === "leave") {
   var data = fs.readFileSync("channels.txt", "utf-8");
   var ip = `${channel}`;
   if (broad) {
      client.part(`${user}.toLowerCase()}`);
      var newValue = data.replace(new RegExp(ip), "");
      fs.writeFileSync("channels.txt", newValue);
      client.me(channel.toLowerCase(), `Successfully left this channel! Sadge`);
      client.say("peepodanksitbot", `peepoDankSit replaceSpace`);
      client.part(channel.toLowerCase());
      return {
         success: true,
         case: null,
         channelLeft: channel,
         reply: `Successfully left #${channel} SadCat`,
      };
   }
}

if (command === "replaceSpace") {
   var data = fs.readFileSync("channels.txt", "utf-8");
   if (msg.senderUsername === "peepodanksitbot") {
      const str = `${data}`;
      const lastIndex = str.lastIndexOf(" ");
      const replacement = "";
      const replaced =
         str.substring(0, lastIndex) +
         replacement +
         str.substring(lastIndex + 1);
      fs.writeFileSync("channels.txt", replaced);
   }
}
