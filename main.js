const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Connecté en tant que ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.channel.send('Pong !');
  }
});

client.login('NjA1NzYwMDY1NTMzOTAyODY4.XUBMTg.I9fRNmz48oVpG1J2ov2d8bwTxjg');