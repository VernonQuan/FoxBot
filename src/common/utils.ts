import { Message, TextChannel, Guild, Client, RichEmbed } from 'discord.js';

import {
  ChannelType,
  ResponseMessages,
  JobPackage,
  ScheduleChannel,
  scheduledMessageChannels,
  SPACE,
  NEW_LINE,
} from './constants';
import { GUILDS, CHANNELS } from '../config.json';

export const codeBlock = (message: string): string => (
  `\`\`\`${message}\`\`\``
);

export const bold = (message: string): string => (
  `**${message}**`
);

export const capitalizeFirst = (message: string): string => (
  `${message[0].toUpperCase()}${message.slice(1)}`
);

export const parseCommand = (message: Message): {
  command: string,
  commandArguments: string,
} => {
  if (!message || !message.content) {
    return {
      command: '',
      commandArguments: '',
    }
  }

  const fullMessage = message.content.slice(1).split(SPACE);

  return {
    command: fullMessage[0],
    commandArguments: fullMessage.slice(1).join(SPACE),
  }
};

export const getTextChannelFromGuild = (guild: Guild, textChannelId: string): TextChannel | null => {
  const textChannel = guild.channels.find(channel => channel.id === textChannelId);
  if (!textChannel || !((textChannel): textChannel is TextChannel => textChannel.type === ChannelType.Text) (textChannel)) {
    return null;
  }

  return textChannel;
};

export const generateInfoMenu = (messages: ResponseMessages): string => (
  Object.keys(messages).map((key) => (
    `${bold(key)} - ${messages[key]}`
  )).join(NEW_LINE)
);

export const createJobPackage = (client: Client): JobPackage => {
  const foxGuild = client.guilds.find(guild => guild.id === GUILDS.FOX);

  const scheduledChannels: scheduledMessageChannels = {
    [ScheduleChannel.PvE]: getTextChannelFromGuild(foxGuild, CHANNELS.PVE),
    [ScheduleChannel.PvP]: getTextChannelFromGuild(foxGuild, CHANNELS.PVP),
  }

  return  {
    scheduledChannels,
    attendanceManagement: foxGuild,
  }
};

export const generateError = (client: Client, ownerId: string, err: Error): void => {
  const owner = client.users.find(owner => owner.id === ownerId);

  owner.send(`Hey ${owner}! I just hit an error! Could you take a look?`, new RichEmbed({
    description: `${err.name}${NEW_LINE}${err.message}${NEW_LINE}${err.stack}`
  }));
};
