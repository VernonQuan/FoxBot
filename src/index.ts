import { Client } from 'discord.js';

import { BOT_SECRET_TOKEN } from './secret.json';
import { CHANNELS } from './constants/channels.json';
import { processCommand } from './commands/processCommand';
import { scheduledMessages } from './jobs/scheduledMessages';
import { TimestampInMs } from './constants/constants';
import { getTextChannel } from './utils/utils';

const client = new Client();

client.on('ready', () => {
  console.log(`Connected as ${client.user.tag}`);

  const pvpChannel = getTextChannel(client, CHANNELS.PVP);

  if (!pvpChannel) {
    return;
  }

  setInterval(scheduledMessages, TimestampInMs.OneMinute, pvpChannel);
});

client.on('message', (receivedMessage) => {
  if (receivedMessage.author.bot || receivedMessage.channel.type === 'dm') {
    return;
  }

  if (receivedMessage.content.startsWith('!')) {
    processCommand(receivedMessage);
  } else if (receivedMessage.content.toLowerCase().includes('hi foxbot')) {
    receivedMessage.channel.send(`Hi ${receivedMessage.author}!`)
  } else if (receivedMessage.content.toLowerCase().includes('establish dominance')) {
    receivedMessage.channel.send('You mean ***assert*** dominance');
  }
});

client.login(BOT_SECRET_TOKEN);
