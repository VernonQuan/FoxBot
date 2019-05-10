import { Message } from 'discord.js';

import { Runes, RUNES_BASE_URL, RUNES_CLASS_URL } from './constants';
import { info, infoEmbed } from './messages';

export const runesCommands = (message: Message, commandArguments: string): void => {
  const { channel } = message;
  if (commandArguments.length === 0) {
    channel.send(info);
    channel.send(infoEmbed);
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
