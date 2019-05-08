import { Message } from 'discord.js';

import { Event } from './constants';
import { generateMessage } from './utils';
import * as whenIsMessages from './messages';

export const whenIsCommands = (message: Message, commandArguments: string): void => {
  if (commandArguments.length === 0) {
    message.channel.send(whenIsMessages.info);
    message.channel.send(whenIsMessages.infoEmbed);

    return;
  }

  if (!Object.values(Event).includes(commandArguments.toLowerCase())) {
    message.channel.send('That is not a valid event!');
  }

  message.channel.send(generateMessage(commandArguments.toLowerCase()));
};
