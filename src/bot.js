require("dotenv").config();

const { Client, WebhookClient } = require('discord.js');

const client = new Client({
  partials: ['MESSAGE', 'REACTION']
});

const webhookClient = new WebhookClient(
  process.env.WEBHOOK_ID,
  process.env.WEBHOOK_TOKEN,
);

const PREFIX = "$";

client.on('ready', () => {
  console.log(`${client.user.tag} has logged in.`);
});

client.on('message', msg => {
if (msg.content === '$about') {
    msg.reply('I am just a random bot created by kostas456_YT#9842');
  }
});

client.on('message', msg => {
  if (msg.content === '$whoisalopex') {
    msg.reply('Alopex is a Mutant Red Fox and she apeared in TMNT 2012 TV Series. Sister of Tiger Claw.');
  }
});

// https://discord.com/channels/738094866965331969/738094866965331974/777831599588245545 for later

client.on('message', msg => {
  if (msg.content === '$Alopex') {
    msg.reply('https://discord.com/channels/738094866965331969/738094866965331974/777831599588245545');
  }
});

client.on('message', msg => {
  if (msg.content === '$licence') {
    msg.reply('**You can read our licence here** https://github.com/AlopexTMNT/AlopexBot/blob/main/README.md *PS* its OPEN SOURCE');
  }
});

client.on('message', msg => {
  if (msg.content === '$kids') {
    msg.reply('https://discord.com/channels/738094866965331969/738094866965331974/778712214495297536');
  }
});

client.on('message', msg => {
  if (msg.content === '$mutated') {
    msg.reply('https://discord.com/channels/738094866965331969/738094866965331974/778712314575847425');
  }
});

client.on('message', message => {
  if (message.content === '$serverip') {
    msg.reply('onononon');
  }
});

client.on('message', message => {
  if (message.content === '$help') {
    message.channel.send('Commands: **HELP** *for help* **serverip** *for my cool minecraft serever ip* **ping** *Ping* **mutated** *You Will see* **Alopex** *Secret* **Kids** *Same* **about** *About the bot* **user-info** *Get the info of your account (Other account features may come)*')
  }
});

client.on('message', message => {
  if (message.content === `$ping`) {
    message.channel.send('Pong.');
  } else if (message.content === `$beep`) {
    message.channel.send('Boop.');
  } else if (message.content === `$server`) {
    message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
  } else if (message.content === `$user-info`) {
    message.channel.send(`Your username: ${message.author.username}\nYour ID: ${message.author.id}\nCreated at: ${message.author.createdAt}\nAvatar: ${message.author.avatarURL({format} = {})}`);
  }

});

client.on('message', message => {
  if (message.content === '$invite') {
    message.channel.send('https://discord.com/oauth2/authorize?client_id=BOTS CLIENT ID&scope=bot')
  }
});

client.login(process.env.DISCORDJS_BOT_TOKEN);
