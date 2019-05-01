import { Message } from 'discord.js';

import { Role } from '../constants/constants';

export const setGuest = (message: Message): void => {
  if (message.mentions.members.array().length === 0) {
    message.channel.send(
      'You need to mention someone to set them as a guest!\n' +
      `For example: !setguest ${message.client.user}`
    )
    return;
  }

  if (message.member.roles.has(Role.Guildie) || message.member.roles.has(Role.Officer)) {
    const memberToSet = message.mentions.members.first();
    if (memberToSet.roles.has(Role.Guildie) || memberToSet.roles.has(Role.Guest) || memberToSet.roles.has(Role.Officer)) {
      message.channel.send('There\'s no need to set this person as a guest! They can already access guest channels!');
    } else {
      memberToSet.addRole(Role.Guest);
      message.channel.send(`${memberToSet} has been set as a guest! Welcome to Fox!`);
    }
  } else {
    message.channel.send('Sorry, you are not authorized to make someone a guest');
  }
};
