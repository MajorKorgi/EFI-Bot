const botCreator = "AveGamers"; //The Name of the Bot Creator. Its just a way to use it in the code.

const fs = require('fs'); //File System   //This is a way to use the File System in Node.js
const Discord = require('discord.js'); //Discord.js   //This is a way to use the Discord.js in Node.js
const config = require('./config.json'); //Config.json   //This is a way to use the Config.json in Node.js

const client = new Discord.Client(); //Discord Client   //This is a way to use the Discord Client in Node.js






client.on('ready', () => { //Discord Client Ready Event

    console.log(`Logged in as ${client.user.tag}!`); //Console Log

}
client.login(config.token); //Discord Client Login   //This is a way to use the Discord Client Login in Node.js