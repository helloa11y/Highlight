//requires
const discord = require('discord.js');
const config = require('./config.json');
const client = new discord.Client();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.login(config.token)  