import { Client, RichEmbed } from 'discord.js';
// import * as mySql from 'mysql';

import { BOT_SECRET_TOKEN, PREFIX, CHANNELS } from './config.json';
import { hi } from './commands/index';
import { processCommand } from './commands/processCommand';
import { processJobs } from './jobs/processJobs';
import { sentinelMessages } from './sentry/guideSentry';
import { checkAttendance } from './sentry/checkAttendance';
import { TimestampInMs } from './common/constants';
import { createJobPackage } from './common/utils';

const client = new Client();
// const connection = mySql.createConnection(DATABASE);

client.on('ready', async () => {
  console.log(`Connected as ${client.user.tag}`);

  try {
    const jobPackage = createJobPackage(client);

    setInterval(processJobs, TimestampInMs.OneMinute, jobPackage);
  } catch (err) {
    console.error(err);
  }
});

client.on('message', async (receivedMessage) => {
  try {
    const { author, channel, content } = receivedMessage;

    if (author.bot || channel.id === CHANNELS.PVP) {
      return;
    }

    if (channel.id === CHANNELS.GUIDES) {
      sentinelMessages(receivedMessage);

      return;
    }

    if (channel.type !== 'dm') {
      const attendanceChannel = receivedMessage.guild.channels.find(channel => channel.name === 'attendance');

      if (attendanceChannel && channel.id === attendanceChannel.id) {
        checkAttendance(receivedMessage);

        return;
      }
    }

    if (content.startsWith(PREFIX)) {
      processCommand(receivedMessage);
    } else if (content.toLowerCase().includes('hi foxbot')) {
      hi(receivedMessage);
    } else if (content.toLowerCase().includes('establish dominance')) {
      channel.send('You mean ***assert*** dominance');
    }
  } catch (err) {
    console.error(err);
    receivedMessage.channel.send('Oh no! I hit a bug! Kiyushi! Could you take a look at this?');
    receivedMessage.channel.send(new RichEmbed({
      description: err,
    }));
  }
});

client.on('guildMemberAdd', (member) => {
  try {
    member.send('Hi! Welcome to Fox! I\'m the mascot FoxBot! Since you\'re new here, you won\'t be able to see all the channels! You\'ll need a guild member to set you as a guest and an officer to set you as a guildie for you to access more channels! If you want to get some more help from me, come to any channel where I\'m at and enter "!help"');
  } catch (err) {
    console.error(err)
  }
});

client.login(BOT_SECRET_TOKEN);
