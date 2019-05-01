import { Message } from 'discord.js';

import { Role } from '../constants/constants';

export const setGuildie = (message: Message): void => {
  if (message.mentions.members.array().length === 0) {
    message.channel.send(
      'You need to mention someone to set them as a guildie!\n' +
      `For example: !setguildie ${message.client.user}`
    )
    return;
  }

  if (message.member.roles.has(Role.Officer)) {
    const memberToSet = message.mentions.members.first();
    if (memberToSet.roles.has(Role.Guildie)) {
      message.channel.send('This person is already a guildie!');
    } else {
      memberToSet.addRole(Role.Guildie);
      if (memberToSet.roles.has(Role.Guest)) {
        memberToSet.removeRole(Role.Guest);
      }
      message.channel.send(`${memberToSet} has been set as a guildie! You can now access all the channels!`);
    }
  } else {
    message.channel.send('Sorry, you are not authorized to make someone a guildie. Only officers can do this!');
  }
};
