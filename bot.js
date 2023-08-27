const botCreator = "AveGamers"; //The Name of the Bot Creator. Its just a way to use it in the code.

const fs = require('fs'); //File System   //This is a way to use the File System in Node.js
const path = require('node:path'); //Node Path   //This is a way to use the Node Path in Node.js
const { Client, Collection, Events, GatewayIntentBits } = require('discord.js'); //Discord.js   //This is a way to use the Discord.js in Node.js
const config = require('./config.json'); //Config.json   //This is a way to use the Config.json in Node.js

const client = new Client({

    fetchAllMembers: false,
  failIfNotExists: false,
  shards: "auto",
  allowedMentions: {
    parse: ["roles", "users"],
    repliedUser: false,
  },
  intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
		GatewayIntentBits.GuildMembers,
	],
  presence: {
    activities: [{
      name: `${config.status.text}`.replace("{prefix}", config.prefix), 
      type: config.status.type, url: config.status.url
    }],
    status: "online"
  }
}); //Discord Client   //This is a way to use the Discord Client in Node.js



client.commands = new Collection();
const foldersPath = path.join(__dirname, 'commands');
const commandFolders = fs.readdirSync(foldersPath);

for (const folder of commandFolders) {
	const commandsPath = path.join(foldersPath, folder);
	const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));
	for (const file of commandFiles) {
		const filePath = path.join(commandsPath, file);
		const command = require(filePath);
		// Set a new item in the Collection with the key as the command name and the value as the exported module
		if ('data' in command && 'execute' in command) {
			client.commands.set(command.data.name, command);
		} else {
			console.log(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`);
		}
	}
}


client.on(Events.InteractionCreate, interaction => {
	if (!interaction.isChatInputCommand()) return;
	console.log(interaction);
});


client.on(Events.InteractionCreate, async interaction => {
	if (!interaction.isChatInputCommand()) return;

	const command = interaction.client.commands.get(interaction.commandName);

	if (!command) {
		console.error(`No command matching ${interaction.commandName} was found.`);
		return;
	}

	try {
		await command.execute(interaction);
	} catch (error) {
		console.error(error);
		if (interaction.replied || interaction.deferred) {
			await interaction.followUp({ content: 'There was an error while executing this command!', ephemeral: true });
		} else {
			await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
		}
	}
});


client.on('ready', () => { //Discord Client Ready Event

    console.log(`Logged in as ${client.user.tag}!`); //Console Log

});




client.login(config.token); //Discord Client Login   //This is a way to use the Discord Client Login in Node.js