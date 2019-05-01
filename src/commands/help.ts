import { Message } from 'discord.js';

import { Command, helpMessages, NEW_LINE, SPACE } from './constants';
import { bold } from './utils';
import { guideCommands } from './guide';

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

    switch (command.toLowerCase()) {
      case Command.Guide:
        guideCommands(message, newCommandArguments);
        return;
      default:
        message.channel.send(`I\'m sorry, I can\'t help you with ${commandArguments}`);
    }
  }
};
