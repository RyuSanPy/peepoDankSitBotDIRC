const axios = require('axios').default
const got = require("got")
exports.run = async(client, message, args, user, channel, self, msg) => {
    try {
    
        if (!args.length) return client.privmsg(msg.channelName, 'You have to specify a song')
       const letras = `${(args.join(' '))}`
       const letra = await got(`https://some-random-api.ml/lyrics?title=${encodeURIComponent(letras)}`).json()
           client.privmsg(msg.channelName,  ` Thumbnail: ${letra.thumbnail.genius} | Link:  ${letra.links.genius}`)
         
           } catch (err) {
           console.log(err);
           client.privmsg(msg.channelName, ` Error invalid song please specify correct song`);
         }
       
       }
