import { Message } from 'discord.js';

import { Guide } from './constants';

export const guideCommands = (message: Message, commandArguments: string): void => {
  if (commandArguments.length === 0) {
    message.channel.send(
      'What guide did you need? I have the following guides in my backpack\n\
      ET - gives the current bosses for this week\n\
      Prices - for all your trading needs!'
    );
  } else {
    switch (commandArguments.toLowerCase()) {
      case Guide.ET:
        message.channel.send(
          'So you need help with ET? This is the current week\'s bosses!\n' +
          'https://surgatekno.com/endless-tower-global/\n' +
          'If that is not updated, you can try this!\n' +
          'https://docs.google.com/spreadsheets/d/1p3xUmVU8BjolVWZ46VrUoiXciI6mq-vz13YAFc980Y8/edit#gid=422711435'
        );
        return;
      case Guide.Prices:
        message.channel.send(
          'You need help with prices? I\'m not good with numbers so but I have two sites for you to use!\n' +
          'https://www.romexchange.com/\n' +
          'https://poring.world'
        );
        return;
      default:
        message.channel.send(`Sorry, I don't have a guide on ${commandArguments}`);
    }
  }
};
