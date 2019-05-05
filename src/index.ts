import { Client } from 'discord.js';

import { BOT_SECRET_TOKEN, PREFIX, CHANNELS } from './config.json';
import { processCommand } from './commands/processCommand';
import { scheduledMessages } from './jobs/scheduledMessages';
import { TimestampInMs } from './common/constants';
import { getTextChannel } from './common/utils';

const client = new Client();

client.on('ready', async () => {
  console.log(`Connected as ${client.user.tag}`);

  try {
    const pvpChannel = await getTextChannel(client, CHANNELS.PVP);

    if (!pvpChannel) {
      return;
    }

    setInterval(scheduledMessages, TimestampInMs.OneMinute, pvpChannel);
  } catch (err) {
    console.error(err);
  }
});

client.on('message', async (receivedMessage) => {
  try {
    if (receivedMessage.author.bot || receivedMessage.channel.type === 'dm' || receivedMessage.channel.id === CHANNELS.PVP) {
      return;
    }

    if (receivedMessage.content.startsWith(PREFIX)) {
      processCommand(receivedMessage);
    } else if (receivedMessage.content.toLowerCase().includes('hi foxbot')) {
      receivedMessage.channel.send(`Hi ${receivedMessage.author}!`)
    } else if (receivedMessage.content.toLowerCase().includes('establish dominance')) {
      receivedMessage.channel.send('You mean ***assert*** dominance');
    }
  } catch (err) {
    console.error(err);
  }
});

client.login(BOT_SECRET_TOKEN);
