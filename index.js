const { Client, Collection } = require('discord.js');
const client = new Client();
const { readdirSync } = require('fs');
const config = require("./config");
const Dashboard = require("./dashboard/index")

client.commands = new Collection();
readdirSync('./commands').forEach(folder => {
  readdirSync(`./commands/${folder}`).forEach(file => {
    const command = require(`./commands/${folder}/${file}`);
    client.commands.set(command.name, command);
  });
});

readdirSync('./events').forEach(file => {
    const event = require(`./events/${file}`);
    client.on(file.split('.')[0], event.bind(null, client));
  });

client.config = config;
client.login(config.token);
