import { Message } from 'discord.js';

import { Command, NEW_LINE } from '../common/constants';
import { parseCommand } from '../common/utils';
import {
  helpCommands,
  runesCommands,
  setGuest,
  setGuildie,
  generateJoke,
  iamCommands,
  whenIsCommands,
  etCommand,
} from './index';

export const processCommand = (message: Message): void => {
  const { channel } = message;
  const { command, commandArguments } = parseCommand(message);

  switch (command.toLowerCase()) {
    case Command.Thank:
      channel.send('Awww, you\'re welcome! I\'m just doing my job!');
      return;
    case Command.Author:
      const randomNumber = Math.floor(Math.random() * 5);
      if (randomNumber) {
        channel.send('I was built by Kiyushi! At least... that\'s what he tells me.');
      } else {
        channel.send('When a girl fox and a bot fox love each other very much...');
      }
      return;
    case Command.Help:
      helpCommands(channel, commandArguments);
      return;
    case Command.ET:
      etCommand(channel);
      return;
    case Command.Prices:
      channel.send(
        `'You need help with prices? I'm not good with numbers but I have two sites for you to use!${NEW_LINE}'` +
        `https://www.romexchange.com/${NEW_LINE}` +
        'https://poring.world'
      );
      return;
    case Command.Runes:
      runesCommands(channel, commandArguments);
      return;
    case Command.SetGuest:
      setGuest(message);
      return;
    case Command.SetGuildie:
      setGuildie(message);
      return;
    case Command.Joke:
      generateJoke(channel);
      return;
    case Command.Iam:
      iamCommands(message, commandArguments);
      return;
    case Command.Whenis:
      whenIsCommands(channel, commandArguments);
      return;
    default:
      channel.send('I\'m sorry, I don\'t understand that command');
  }
}
