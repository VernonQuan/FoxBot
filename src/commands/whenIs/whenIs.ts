import { Message } from 'discord.js';

import * as whenIsMessages from './messages';

export const whenIsCommands = (message: Message, commandArguments: string): void => {
  if (commandArguments.length === 0) {
    message.channel.send(whenIsMessages.info);
    message.channel.send(whenIsMessages.infoEmbed);

    return;
  }
}
