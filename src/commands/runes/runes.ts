import { Message } from 'discord.js';

import { NEW_LINE } from '../../common/constants';
import { bold, capitalizeFirst } from '../../common/utils';
import { Runes, runeMessage, RUNES_BASE_URL, RUNES_CLASS_URL } from './constants';

export const runesCommands = (message: Message, commandArguments: string): void => {
  const { channel } = message;
  if (commandArguments.length === 0) {
    channel.send(
      `These are the current commands for the classes you can use with !runes${NEW_LINE}` +
      `eg: !runes assassin${NEW_LINE}` +
      Object.keys(runeMessage).map((command) => (
        `${NEW_LINE}${bold(capitalizeFirst(command))} - ${runeMessage[command]}`
      )).join('')
    );
  } else {
    switch (commandArguments.toLowerCase()) {
      case Runes.Simulator:
        channel.send('https://phamtrong204.github.io/RuneBFS');
        return;
      case Runes.Assassin:
      case Runes.Blacksmith:
      case Runes.Crusader:
      case Runes.Hunter:
      case Runes.Knight:
      case Runes.Monk:
      case Runes.Priest:
      case Runes.Wizard:
        channel.send(`${RUNES_BASE_URL}${RUNES_CLASS_URL[commandArguments.toLowerCase()]}`)
        return;
      default:
        channel.send(`I'm sorry, I don't have ${commandArguments} yet. If you didn't mispell it, I'll try to have it soon!`);
    }
  }
};
