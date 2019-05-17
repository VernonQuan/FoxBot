import { Channel } from '../../common/constants';
import { Event } from './constants';
import { generateMessage } from './utils';
import * as whenIsMessages from './messages';

export const whenIsCommands = (channel: Channel, commandArguments: string): void => {
  if (commandArguments.length === 0) {
    channel.send(whenIsMessages.info, whenIsMessages.generateTime());

    return;
  }

  if (!Object.values(Event).includes(commandArguments.toLowerCase())) {
    channel.send('That is not a valid event!');

    return;
  }

  channel.send(generateMessage(commandArguments.toLowerCase()));
};
