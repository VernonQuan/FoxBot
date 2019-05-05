import { Message } from 'discord.js';

import { Command, NEW_LINE } from '../common/constants';
import { parseCommand } from '../common/utils';
import {
  helpCommands,
  guideCommands,
  runesCommands,
  setGuest,
  setGuildie,
  generateJoke,
  iamCommands,
} from './index';

export const processCommand = (message: Message): void => {
  const { command, commandArguments } = parseCommand(message);

  switch (command.toLowerCase()) {
    case Command.Thank:
      message.channel.send('Awww, you\'re welcome! I\'m just doing my job!');
      return;
    case Command.Author:
      message.channel.send('I was made by Kiyushi! Bit by bit. Byte by byte!');
      return;
    case Command.Help:
      helpCommands(message, commandArguments);
      return;
    case Command.Guide:
      guideCommands(message, commandArguments);
      return;
    case Command.Prices:
      message.channel.send(
        `'You need help with prices? I'm not good with numbers so but I have two sites for you to use!${NEW_LINE}'` +
        `https://www.romexchange.com/${NEW_LINE}` +
        'https://poring.world'
      );
      return;
    case Command.Runes:
      runesCommands(message, commandArguments);
      return;
    case Command.SetGuest:
      setGuest(message);
      return;
    case Command.SetGuildie:
      setGuildie(message);
      return;
    case Command.Joke:
      generateJoke(message);
      return;
    case Command.Iam:
      iamCommands(message, commandArguments);
      return;
    default:
      message.channel.send('I\'m sorry, I don\'t understand that command');
  }
}
