import { isEqual } from 'lodash';
import { Message, Client, TextChannel } from 'discord.js';

import { MainClass, SubClass, ClassId, SubClassesByMainClass, SPACE } from '../constants/constants';

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

export const getNumberOfMainClasses = (classes: string[]): number => {
  if (!Array.isArray(classes) || classes.length === 0) {
    return 0;
  }

  return classes.reduce((acc, curr) => {
    if (curr === MainClass.Acolyte || curr === MainClass.Archer || curr === MainClass.Magician ||
        curr === MainClass.Merchant || curr === MainClass.Swordsman || curr === MainClass.Thief ||
        curr === MainClass.Novice) {
      return acc + 1;
    }
    return acc;
  }, 0);
};

export const getMainClass = (classes: string[]): string => {
  for (let i = 0; i < classes.length; i++) {
    if (classes[i] === MainClass.Acolyte || classes[i] === MainClass.Archer || classes[i] === MainClass.Magician ||
        classes[i] === MainClass.Merchant || classes[i] === MainClass.Swordsman || classes[i] === MainClass.Thief ||
        classes[i] === MainClass.Novice) {
      return classes[i];
    }
  }

  return '';
}

export const filterActualClasses = (classes: string[]): string[] => (
  classes.filter(roClass => ClassId[roClass])
);

export const hasDifferentMainClass = (classes: string[]): boolean => {
  if (classes.length > 2) {
    return true;
  }

  if (classes.length === 1) {
    return false;
  }

  const sortedClasses = classes.sort()

  if (isEqual(sortedClasses, SubClassesByMainClass[MainClass.Acolyte].sort()) ||
      isEqual(sortedClasses, [SubClass.Bard, SubClass.Hunter].sort()) ||
      isEqual(sortedClasses, [SubClass.Dancer, SubClass.Hunter].sort()) ||
      isEqual(sortedClasses, SubClassesByMainClass[MainClass.Magician].sort()) ||
      isEqual(sortedClasses, SubClassesByMainClass[MainClass.Merchant].sort()) ||
      isEqual(sortedClasses, SubClassesByMainClass[MainClass.Swordsman].sort()) ||
      isEqual(sortedClasses, SubClassesByMainClass[MainClass.Thief].sort())) {
    return false;
  }

  return true;
};

export const getTextChannel = (client: Client, textChannelId: string): TextChannel | null => {
  const textChannel = client.channels.find(channel => channel.id === textChannelId);
  if (!textChannel || !((textChannel): textChannel is TextChannel => textChannel.type === 'text') (textChannel)) {
    return null;
  }

  return textChannel;
}
