if (message.includes("echo") && msg.senderUsername === "ryusan_") {
   client.say(channel, `${args.join(" ")}`);
}
