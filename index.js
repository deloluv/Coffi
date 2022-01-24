// Dependencies
const { Client, Intents } = require('discord.js');
const config = require('./config.json');

// Initilize Client
const client = new Client({ intents: [ Intents.FLAGS.GUILDS ] });

client.once('ready', () => {
    console.log('Coffi is Ready!');
});

// Login
client.login(config.token);