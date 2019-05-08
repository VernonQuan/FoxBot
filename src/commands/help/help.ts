import { Message } from 'discord.js';

import { Command, SPACE } from '../../common/constants';
import { guideCommands } from '../guide/guide';
import * as helpMessages from './messages';

export const helpCommands = (message: Message, commandArguments: string): void => {
  const { channel } = message;
  if (commandArguments.length === 0) {
    channel.send(helpMessages.info);
    channel.send(helpMessages.infoEmbed);
  } else {
    const fullMessage = commandArguments.split(SPACE);
    const command = fullMessage[0];
    const newCommandArguments = fullMessage.slice(1).join(SPACE);

    const sorryMessage = commandArguments.split(' ');
    let wordEndsWithIng = false;

    for (let i = 0; i < sorryMessage.length; i++) {
      if (sorryMessage[i].toLowerCase() === 'me') {
        sorryMessage[i] = 'you';
      }
      if (sorryMessage[i].toLowerCase() === 'my') {
        sorryMessage[i] = 'your';
      }
      if (i === 0 && sorryMessage[i].endsWith('ing')) {
        wordEndsWithIng = true;
      }
    }

    switch (command.toLowerCase()) {
      case Command.Guide:
        guideCommands(message, newCommandArguments);
        return;
      default:
        channel.send(`I'm sorry, I can't help ${wordEndsWithIng ? 'with ' : ''}${sorryMessage.join(SPACE)}`);
    }
  }
};
