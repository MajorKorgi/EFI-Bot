const botCreator = "AveGamers"; //The Name of the Bot Creator. Its just a way to use it in the code.

const fs = require('fs'); //File System   //This is a way to use the File System in Node.js
const Discord = require('discord.js'); //Discord.js   //This is a way to use the Discord.js in Node.js
const config = require('./config.json'); //Config.json   //This is a way to use the Config.json in Node.js

import { Client, GatewayIntentBits } from 'discord.js';
const client = new Client({

    fetchAllMembers: false,
  failIfNotExists: false,
  shards: "auto",
  allowedMentions: {
    parse: ["roles", "users"],
    repliedUser: false,
  },
  partials: ['MESSAGE', 'CHANNEL', 'REACTION', 'GUILD_MEMBER', 'USER'],
  intents: [ 
    Discord.Intents.FLAGS.GUILDS,
     Discord.Intents.FLAGS.GUILD_MEMBERS,
    Discord.Intents.FLAGS.GUILD_INTEGRATIONS,
    Discord.Intents.FLAGS.GUILD_VOICE_STATES,
    Discord.Intents.FLAGS.GUILD_MESSAGES,
  ],
  presence: {
    activities: [{
      name: `${config.status.text}`.replace("{prefix}", config.prefix), 
      type: config.status.type, url: config.status.url
    }],
    status: "online"
  }


}); //Discord Client   //This is a way to use the Discord Client in Node.js






client.on('ready', () => { //Discord Client Ready Event

    console.log(`Logged in as ${client.user.tag}!`); //Console Log

});




client.login(config.token); //Discord Client Login   //This is a way to use the Discord Client Login in Node.js