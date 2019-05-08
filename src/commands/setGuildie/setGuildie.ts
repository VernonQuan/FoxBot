import { Message } from 'discord.js';

import { Role } from '../../common/constants';

export const setGuildie = (message: Message): void => {
  const { mentions, channel, client, member } = message;

  if (mentions.members.array().length === 0) {
    channel.send(
      'You need to mention someone to set them as a guildie!\n' +
      `For example: !setguildie ${client.user}`
    )
    return;
  }
  const memberToSet = mentions.members.first();

  if (!member.roles.has(Role.Officer)) {
    channel.send('Sorry, you are not authorized to make someone a guildie. Only officers can do this!');

    return;
  }

  if (memberToSet.user === client.user) {
    channel.send('You want to set ME as a guildie? Thanks but I\'m a bot! I shouldn\'t be in all the guild channels!');

    return;
  }

  if (memberToSet.roles.has(Role.Guildie)) {
    channel.send('This person is already a guildie!');

    return;
  }

  if (memberToSet.roles.has(Role.Guest)) {
    memberToSet.removeRole(Role.Guest);
  }

  memberToSet.addRole(Role.Guildie);
  channel.send(`${memberToSet} has been set as a guildie! You can now access all the channels!`);
};
