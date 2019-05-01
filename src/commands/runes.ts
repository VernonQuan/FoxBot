import { Message } from 'discord.js';

import { Runes, runeMessage, RUNES_BASE_URL, RUNES_CLASS_URL, NEW_LINE } from './constants';
import { bold, capitalizeFirst } from './utils';

export const runesCommands = (message: Message, commandArguments: string): void => {
  if (commandArguments.length === 0) {
    message.channel.send(
      `These are the current commands for the classes you can use with !runes${NEW_LINE}` +
      `eg: !runes assassin${NEW_LINE}` +
      Object.keys(runeMessage).map((command) => (
        `${NEW_LINE}${bold(capitalizeFirst(command))} - ${runeMessage[command]}`
      )).join('')
    );
  } else {
    switch (commandArguments.toLowerCase()) {
      case Runes.Simulator:
        message.channel.send('https://phamtrong204.github.io/RuneBFS');
        return;
      case Runes.Assassin:
      case Runes.Blacksmith:
      case Runes.Crusader:
      case Runes.Hunter:
      case Runes.Knight:
      case Runes.Monk:
      case Runes.Priest:
      case Runes.Wizard:
        message.channel.send(`${RUNES_BASE_URL}${RUNES_CLASS_URL[commandArguments.toLowerCase()]}`)
        return;
      default:
        message.channel.send(`I'm sorry, I don't have ${commandArguments} yet. If you didn't mispell it, I'll try to have it soon!`);
    }
  }
};
