exports.run = async (client, message, args, user, channel, self) => {
  const fs = require("fs-extra");
  const channelsFile = "./channels.txt";
  const channelOptions = fs
    .readFileSync(channelsFile)
    .toString()
    .split('"')
    .filter(function (i) {
      return i != null;
    })
    .join("")
    .split(" ");
  async function pingServer() {
    const t0 = performance.now();
    await client.ping();
    const t1 = performance.now();
    const latency = (t1 - t0).toFixed();
    return latency;
  }
  pingServer().then(function (latency) {
    client.privmsg(
      channel,
      `peepoDankSit pong ${user} ${latency}ms Channels: ${channelOptions.length}`
    );
  });
};