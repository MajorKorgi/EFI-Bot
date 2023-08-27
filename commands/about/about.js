const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('about')
		.setDescription('See some information about the bot.'),
	async execute(interaction) {
		await interaction.reply('The Bot was created by <@786212633371344906> and integrates webuntis into our discord server.');
	},
};