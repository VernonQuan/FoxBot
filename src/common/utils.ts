import { Message, Client, TextChannel } from 'discord.js';

import { ChannelType, ResponseMessages, SPACE, NEW_LINE } from './constants';

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

export const getTextChannel = (client: Client, textChannelId: string): TextChannel | null => {
  const textChannel = client.channels.find(channel => channel.id === textChannelId);
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
