import { Message } from 'discord.js';

import { Event } from './constants';
import { generateMessage } from './utils';
import * as whenIsMessages from './messages';

export const whenIsCommands = (message: Message, commandArguments: string): void => {
  const { channel } = message;
  if (!Object.values(Event).includes(commandArguments.toLowerCase()) && commandArguments.length > 0) {
    channel.send('That is not a valid event!');

    return;
  }

  if (commandArguments.length === 0) {
    channel.send(whenIsMessages.info);
    channel.send(whenIsMessages.generateTime());

    return;
  }


  channel.send(generateMessage(commandArguments.toLowerCase()));
};
