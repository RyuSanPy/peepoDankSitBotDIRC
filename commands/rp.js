if (command === "rp") {
   const randomping = await axios.get(
      `https://2g.be/twitch/randomviewer.php?channel=${channel}`
   );
   client.privmsg(channel, `peepoDankSit 🔔 ${randomping.data}`);
}
