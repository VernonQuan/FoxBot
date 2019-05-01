import { Client } from 'discord.js';

import { BOT_SECRET_TOKEN } from './secret.json';
import { processCommand } from './commands/processCommand';
const client = new Client();

client.on('ready', () => {
  console.log(`Connected as ${client.user.tag}`);

});

client.on('message', (receivedMessage) => {
  if (receivedMessage.author.bot || receivedMessage.channel.type === 'dm') {
    return;
  }

  if (receivedMessage.content.startsWith('!')) {
    processCommand(receivedMessage);
  } else if (receivedMessage.content.toLowerCase() === 'hi foxbot') {
    receivedMessage.channel.send(`Hi ${receivedMessage.author}!`)
  }
});

client.login(BOT_SECRET_TOKEN);
