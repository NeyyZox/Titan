const Discord = require('discord.js');
const { TOKEN, PREFIX } = require("./config");
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Connecté en tant que ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content.startsWith(`${PREFIX}ping`)) {
    msg.channel.send('Pong !');
  }
});

client.login(TOKEN);