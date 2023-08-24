const botCreator = "AveGamers"; //The Name of the Bot Creator. Its just a way to use it in the code.

var fs = require('fs'); //File System   //This is a way to use the File System in Node.js

const { Client, Collection, GatewayIntentBits } = require("discord.js");
const client = new Client({
    allowedMentions: { parse: ['users', 'roles'] },
    fetchAllMembers: false,
    intents: [ GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers, GatewayIntentBits.GuildMessages, GatewayIntentBits.GuildMessageReactions, GatewayIntentBits.MessageContent ],
});

const {token} = require('./config.json'); //The Token of the Bot

console.log("Bot is Online"); //The Log of the Bot
client.login(token); //The Login of the Bot





/*
function test(x,y, test) {
    console.log(test, x +y);
}

test(1, 2, 2);

const const1 = {

    color: "red",
    size: 12,
    name: "AveGamers"

};

console.log(const1.color);
*/