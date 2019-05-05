import { Message } from 'discord.js';

import { Command, NEW_LINE, SPACE } from '../../common/constants';
import { bold } from '../../common/utils';
import { guideCommands } from '../guide/guide';
import { USERS } from '../../config.json';
import { helpMessages } from './constants';

export const helpCommands = (message: Message, commandArguments: string): void => {
  if (commandArguments.length === 0) {
    message.channel.send(
      `You can use the following commands with me! Just use "!" followed by that command!${NEW_LINE}` +
      Object.keys(helpMessages).map((command) => (
        `${NEW_LINE}${bold(command)} - ${helpMessages[command]}`
      )).join('')
    );
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
      if (sorryMessage[i] === `<@${USERS.AznBeast}>`) {
        sorryMessage[i] = 'that dumbass';
      }
    }

    switch (command.toLowerCase()) {
      case Command.Guide:
        guideCommands(message, newCommandArguments);
        return;
      default:
        message.channel.send(`I'm sorry, I can't help ${wordEndsWithIng ? 'with ' : ''}${sorryMessage.join(SPACE)}`);
    }
  }
};
