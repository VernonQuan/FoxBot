import { TextChannel, Guild } from 'discord.js';

import { Role } from '../../common/constants';

export const setTemporaryChannelPermissions = (channel: TextChannel, guild: Guild): void => {
  channel.overwritePermissions(guild.roles.find(role => role.name === '@everyone'), {
    CONNECT: false,
    VIEW_CHANNEL: false,
    SEND_MESSAGES: false,
    READ_MESSAGES: false,
    READ_MESSAGE_HISTORY: false,
  });
  channel.overwritePermissions(guild.roles.find(role => role.id === Role.Guildie), {
    CONNECT: true,
    VIEW_CHANNEL: true,
    SEND_MESSAGES: true,
    READ_MESSAGES: true,
    READ_MESSAGE_HISTORY: true,
  });
  channel.overwritePermissions(guild.roles.find(role => role.id === Role.Bot), {
    CONNECT: true,
    VIEW_CHANNEL: true,
    SEND_MESSAGES: true,
    READ_MESSAGES: true,
    READ_MESSAGE_HISTORY: true,
  });
};
