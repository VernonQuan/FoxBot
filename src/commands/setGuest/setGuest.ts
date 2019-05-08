import { Message } from 'discord.js';

import { Role } from '../../common/constants';

export const setGuest = (message: Message): void => {
  const { mentions, channel, client, member } = message;

  if (mentions.members.array().length === 0) {
    channel.send(
      'You need to mention someone to set them as a guest!\n' +
      `For example: !setguest ${client.user}`
    )
    return;
  }

  if (!member.roles.has(Role.Guildie) && !member.roles.has(Role.Officer)) {
    channel.send('Sorry, you are not authorized to make someone a guest. Please ask any guildie to do this for you!');

    return;
  }

  const memberToSet = mentions.members.first();

  if (memberToSet.user === client.user) {
    channel.send('You want to set ME as a guest? Silly human, bots can\'t be guests!');

    return;
  }

  if (memberToSet.roles.has(Role.Guildie) || memberToSet.roles.has(Role.Guest) || memberToSet.roles.has(Role.Officer)) {
    channel.send('There\'s no need to set this person as a guest! They can already access guest channels!');

    return;
  }
  memberToSet.addRole(Role.Guest);
  channel.send(`${memberToSet} has been set as a guest! Welcome to Fox!`);

};
