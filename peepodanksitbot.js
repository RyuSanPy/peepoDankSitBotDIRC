require('dotenv').config();
const axios=require('axios')
const humanize = require('humanize-duration');
const { ChatClient, AlternateMessageModifier, SlowModeRateLimiter } = require("dank-twitch-irc");
const myHumanizer = humanize.humanizer({
    language: 'shortEs',
    languages: {
        shortEn: {
            y: () => 'y',
            mo: () => 'mo',
            w: () => 'w',
            d: () => 'd',
            h: () => 'h',
            m: () => 'm',
            s: () => 's',
            ms: () => 'ms',
        },
    },
});

function humanizeTimestamp(date, converted) {
    let ms = date
    if (!converted) ms = Date.now() - Date.parse(date);
    const options = {
        units: ['y', 'mo', 'd', 'h', 'm', 's'],
        largest: 3,
        round: true,
        conjunction: ' y ',
        delimiter: ', ',
        spacer: '',
    };
    return myHumanizer(ms, options);
};

let client = new ChatClient({
  
    username: process.env.BUSERNAME,
    password: process.env.BTOKEN,

    rateLimits: "default",
    maxChannelCountPerConnection: 100,

    connectionRateLimits: {
        parallelConnections: 20,
        releaseTime: 300,
    },

    connection: {
        secure: false,
    },
});


const fs = require('fs-extra'); 
client.use(new SlowModeRateLimiter(client))
client.use(new AlternateMessageModifier(client))

client.on("ready", () => console.log("Successfully connected to chat"));
client.on("close", (error) => {
    if(error != null) {
        console.error("Client closed due to error", error);
    }
});

client.on("PRIVMSG", (msg) => {
    console.log(`[#${msg.channelName}] ${msg.displayName}: ${msg.messageText}`);
});

const channelsFile = 'channels.txt'
const channelOptions = fs.readFileSync(channelsFile).toString().split('"').filter(
    function(i){return i!= null;}).join('').split(' ')

// NOTE: MAKE AN ARCHIVE NAMED AS "channels.txt" OUTSIDE OF THE CARPETS, YOU THEN PUT THE CHANNEL YOU WANT TO CONNECT FIRST AND YOU CAN GO ADDING UNTIL 20 CHATS, THIS IS WHEN IT STOP WORKING PROPERLY IN SOME CHATS

client.connect();
client.joinAll(channelOptions);

client.on("PRIVMSG", async (msg, self) => { 

// USERDATA

    let user = msg.displayName
    let userlow = msg.displayName.toLowerCase()
    let channel = msg.channelName
    let message = msg.messageText
    let broad = msg.badges.hasBroadcaster
    let mods = msg.badges.hasModerator
    let vips = msg.badges.hasVIP
    
    const commandName = message.trim();

    // NO PREFIx COMMANDS

    if (commandName === "peepoDankSit") {
        client.privmsg(channel, `peepoDankSit`);
    }

    // PREFIX

    const prefix = "peepoDankSit "
    
    if(self || !message.startsWith(prefix)) return; 

    const PREFIX = prefix;
    let [command, ...args] = msg.messageText.slice(PREFIX.length).split(/ +/g);


    // COMMANDS

    let comm = command.toLowerCase();

    let userid = user
        if (args[0]) {
            if (args[0].startsWith("@")) {
                args[0] = args[0].substring(1).replace(/\b(?:@|⠀|󠀀|)\b/gi, "");
        }
        userid = args[0];
    };
    let uid = userid.toLowerCase()
//----------------------------------------------------------------------------------------------------------------------------------------------//
    if (command === "test") {
        client.privmsg(channel, `xd ${user}`)
    }
//----------------------------------------------------------------------------------------------------------------------------------------------//    
    if (command === "cat"){
        const responsecat = await axios.get(`https://meme-api.herokuapp.com/gimme/cat`);
        client.privmsg(channel, `peepoDankSit 🐱 ${responsecat.data.url}`)
    }
//----------------------------------------------------------------------------------------------------------------------------------------------//    
    if (command === "dog"){
        const responsedog = await axios.get(`https://meme-api.herokuapp.com/gimme/dog`);
        client.privmsg(channel, `peepoDankSit 🐶 ${responsedog.data.url}`)
    }
//----------------------------------------------------------------------------------------------------------------------------------------------//    
    if (command === "rac"){
        const responserac = await axios.get (`https://meme-api.herokuapp.com/gimme/Raccoons`)
        client.privmsg(channel, `peepoDankSit 🦝 ${responserac.data.url}`)
    }
//----------------------------------------------------------------------------------------------------------------------------------------------//    
    if (command === "r/"){
    const responsereddit = await axios.get (`https://meme-api.herokuapp.com/gimme/${args[0]}`)
    client.privmsg(channel, `peepoDankSit random r/${args[0]} post ${responsereddit.data.url}`)
    }
//----------------------------------------------------------------------------------------------------------------------------------------------//    
    if (command === "commands"){
        client.privmsg(channel, `peepoDankSit commands here https://github.com/RyuSanPy/peepoDankSitBotDIRC`)
    }
//----------------------------------------------------------------------------------------------------------------------------------------------//    
    if (command === "clear"){
        for (let xd = 0; xd < 30; xd++) 
        client.privmsg(channel, `/clear`)
    }
    if (command === "clearr"){
        for (let xd = 0; xd < args[0]; xd++) 
        client.privmsg(channel, `/clear`)
    }
//----------------------------------------------------------------------------------------------------------------------------------------------//    
    if (command === "yourmom"){
        const responsecat = await axios.get(`https://meme-api.herokuapp.com/gimme/cow`);
        client.privmsg(channel, `peepoDankSit ${responsecat.data.url}`)
    }
//----------------------------------------------------------------------------------------------------------------------------------------------//    
    if (command ===  "ping") {
        const t0 = performance.now();
        await client.ping()
        const t1 = performance.now();
        const latency = ( t1 - t0).toFixed()
        client.privmsg(channel, `peepoDankSit pong ${user} ${latency}ms Channels: ${channelOptions.length}`);
    } 
//----------------------------------------------------------------------------------------------------------------------------------------------//    
    if (command === "tuck") {
        client.privmsg(channel, `${user} tucks ${args[0]} into bed peepoDankSit 👉 🛏 `)
    }
//----------------------------------------------------------------------------------------------------------------------------------------------//    
    if (command === "ov") {const axios = require('axios');
    streamer = channel.replace('#', '')
    if (args[0]) {
    if (args[0].startsWith("@")) {
    args[0] = args[0].substring(1);
    }
    streamer = args[0];
    }
    let chatters = await axios.get(`https://tmi.twitch.tv/group/user/${streamer}/chatters`);
    let chattercount = chatters.data["chatter_count"];
    client.privmsg(channel, `peepoDankSit There are currently ${chattercount} users in that chat.`)
    } 
//----------------------------------------------------------------------------------------------------------------------------------------------//
        if (command === "dif") { //diferencia entre los dos angulos 
            if(!args[0]) return client.privmsg(channel, (`You need to specify 2 numbers`))
            if(isNaN(args[0]) || isNaN(args[1])) return client.privmsg(channel, (`That is not a number`)) 
            return client.privmsg(channel, (`peepoDankSit ${user} difference -> ${Math.abs(args[0] - args[1])}`))
    }                            //GRACIAS SOON FeelsStrongMan
//----------------------------------------------------------------------------------------------------------------------------------------------//
        if (command === "dis"){ //distancia del stronghold (1000/diferencia)<- division
            if(!args[0]) return client.privmsg(channel, `You need to specify 2 numbers`) 
            return client.privmsg(channel, (`peepoDankSit ${user} Stronghold distance -> ${Math.abs(1000/args[0])}`))
        }
//----------------------------------------------------------------------------------------------------------------------------------------------//        
try {
    if (command === "?") {

        streamer = channel.replace('#', '')
        if (args[0]) {
          if (args[0].startsWith("@")) {
          args[0] = args[0].substring(1);
        }
        user = args[0];
        }

        const response = await axios.get(`https://api.ivr.fi/v2/twitch/user/${user}`) 
        accountage = new Date().getTime() - Date.parse(response.data.createdAt)
    client.privmsg(channel, `User: @${response.data.displayName} Color: ${response.data.chatColor} id: ${response.data.id}, Bio: ${response.data.bio} Followers: ${response.data.followers}, Views: ${response.data.profileViewCount} Afilliate: ${response.data.roles.isAffiliate}, Partner: ${response.data.roles.isPartner}, Title:" ${response.data.lastBroadcast.title} " Age: ${humanize(accountage, {largest: 3})} `)
    }
} catch(e) {
    client.privmsg(channel, `Couldn't find the user!`)
}
//----------------------------------------------------------------------------------------------------------------------------------------------//                

        if (command === "asd"){
            client.me(channel, "asd")
        }
//----------------------------------------------------------------------------------------------------------------------------------------------//
        if (command === "rp"){
            const randomping = await axios.get (`https://2g.be/twitch/randomviewer.php?channel=${channel}`)
            client.privmsg(channel, `peepoDankSit 🔔 ${randomping.data}`)
        }
//----------------------------------------------------------------------------------------------------------------------------------------------//
//   HUWOBOT RAID NOTIFY
if(msg.messageText.includes("A Raid Event at Level") && msg.messageText.includes("Type +join to join the raid!") && (msg.senderUsername === 'ryusan_')) 
client.say("ryusan_", `peepoDankSit ⚔️ JOIN THE RAID! RyuSan_ 🛡️`)
//----------------------------------------------------------------------------------------------------------------------------------------------//
       if (command === 'join') {
            if(`${userlow}` === 'ryusan_') {
            client.join(`${args[0].toLowerCase()}`)
            let content = ' ' + args[0].toLowerCase()
            fs.writeFile('channels.txt', content, { flag: 'a+' }, err => {})
            client.me(channel, (`${user}, entrando en el canal: "${args[0].toLowerCase()}" FeelsOkayMan`))
            client.privmsg(`${args[0].toLowerCase()}`, `peepoDankSit 🔔 @${args[0].toLowerCase()} Prefijo: peepoDankSit`)
        }
        else {
            if(channel === 'peepoDankSitBot') {
            client.privmsg(channel, `${user}, espera a que el creador del bot revise tu solicitud SeemsGood`);
            }
            else {
            client.privmsg(channel, `${user}, este comando solo está disponible en el chat del bot DinkDonk`)
            }
        };
    }
})