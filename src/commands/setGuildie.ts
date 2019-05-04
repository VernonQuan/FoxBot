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
  const memberToSet = message.mentions.members.first();

  if (!message.member.roles.has(Role.Officer)) {
    message.channel.send('Sorry, you are not authorized to make someone a guildie. Only officers can do this!');

    return;
  }

  if (memberToSet.user === message.client.user) {
    message.channel.send('You want to set ME as a guildie? Thanks but I\'m a bot! I shouldn\'t be in all the guild channels!');

    return;
  }

  if (memberToSet.roles.has(Role.Guildie)) {
    message.channel.send('This person is already a guildie!');

    return;
  }

  if (memberToSet.roles.has(Role.Guest)) {
    memberToSet.removeRole(Role.Guest);
  }

  memberToSet.addRole(Role.Guildie);
  message.channel.send(`${memberToSet} has been set as a guildie! You can now access all the channels!`);
};
