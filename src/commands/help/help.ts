import { SPACE, Channel } from '../../common/constants';
import * as helpMessages from './messages';

export const helpCommands = (channel: Channel, commandArguments: string): void => {
  if (commandArguments.length === 0) {
    channel.send(helpMessages.info, helpMessages.infoEmbed);

    return;
  }

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

  channel.send(`I'm sorry, I can't help ${wordEndsWithIng ? 'with ' : ''}${sorryMessage.join(SPACE)}`);

};
