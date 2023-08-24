const botCreator = "AveGamers"; //The Name of the Bot Creator. Its just a way to use it in the code.

var fs = require('fs'); //File System   //This is a way to use the File System in Node.js
const {Client, Collection, GatewayIntents} = require('discord.js'); //Discord.js
const {token} = require('./config.json'); //The Token of the Bot
const client = new Client({intents: [GatewayIntents.GUILDS, GatewayIntents.GUILD_MESSAGES]}); //The Client of the Bot
client.commands = new Collection(); //The Commands of the Bot
client.aliases = new Collection(); //The Aliases of the Bot
client.categories = fs.readdirSync("./commands/"); //The Categories of the Bot
["command"].forEach(handler => { //The Handler of the Bot
    require(`./handlers/${handler}`)(client);
});

client.on('ready', () => { //The Ready Event of the Bot
    console.log(`${client.user.tag} is now online!`); //The Message that the Bot is now online
    client.user.setActivity("AveGamers", {type: "WATCHING"}); //The Activity of the Bot
});

client.on('messageCreate', async message => { //The Message Event of the Bot
    if(message.author.bot) return; //If the Author is a Bot, then return
    if(!message.guild) return; //If the Message is not in a Guild, then return
    if(!message.content.startsWith(prefix)) return; //If the Message does not start with the Prefix, then return
    if(!message.member) message.member = await message.guild.fetchMember(message); //If the Message does not have a Member, then fetch the Member
    const args = message.content.slice(prefix.length).trim().split(/ +/g); //The Arguments of the Message
    const cmd = args.shift().toLowerCase(); //The Command of the Message
    if(cmd.length === 0) return; //If the Command is not valid, then return
    let command = client.commands.get(cmd); //The Command of the Bot
    if(!command) command = client.commands.get(client.aliases.get(cmd)); //If the Command is not valid, then return
    if(command) command.run(client, message, args); //If the Command is valid, then run the Command
});

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