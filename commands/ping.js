// Bot ping
if (command === "ping") {
   const t0 = performance.now();
   await client.ping();
   const t1 = performance.now();
   const latency = (t1 - t0).toFixed();
   client.privmsg(
      channel,
      `peepoDankSit pong ${user} ${latency}ms Channels: ${channelOptions.length}`
   );
}
