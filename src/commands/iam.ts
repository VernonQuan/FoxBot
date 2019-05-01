import { Message } from 'discord.js';

import {
  NEW_LINE,
  SPACE,
  MainClass,
  SubClass,
  Role,
  MainClassBySubClass,
  SubClassesByMainClass,
  ClassId,
} from '../constants/constants';
import {
  getNumberOfMainClasses,
  filterActualClasses,
  bold,
  hasDifferentMainClass,
  getMainClass,
} from '../utils/utils';

export const iamCommands = (message: Message, classes: string): void => {
  const {
    member: currentMember,
    member: {
      roles: currentMemberRoles,
    },
  } = message;
  if (!currentMemberRoles || !(currentMemberRoles.has(Role.Guest) ||currentMemberRoles.has(Role.Guildie) || currentMemberRoles.has(Role.Officer))) {
    message.channel.send('You need to be at least a guest to set your class!');

    return;
  }

  if (classes.length === 0) {
    message.channel.send(
      `Do you want to set your class?${NEW_LINE}` +
      `You can only have one main class but as many sub classes as you want${NEW_LINE}` +
      `You can also put just one subclass class or two subclasses if they have the same main class!${NEW_LINE}` +
      `examples:${NEW_LINE}` +
      `!iam wizard priest acolyte${NEW_LINE}` +
      `!iam wizard${NEW_LINE}` +
      `!iam knight crusader${NEW_LINE}` +
      `${NEW_LINE}Main classes:${NEW_LINE}${Object.keys(MainClass).map(mainClass => `${bold(mainClass)}`).join(SPACE)}${NEW_LINE}` +
      `Sub classes:${NEW_LINE}${Object.keys(SubClass).map(subClass => `${bold(subClass)}`).join(SPACE)}${NEW_LINE}`
    )

    return;
  }


  const filteredClasses = filterActualClasses(classes.toLowerCase().split(SPACE));
  const additionalRoles = [];

  if (filteredClasses.length === 0) {
    message.channel.send('You did not give me any valid classes!');

    return;
  }

  if (currentMemberRoles.has(Role.Guest)) {
    additionalRoles.push(Role.Guest);
  }

  if (currentMemberRoles.has(Role.Guildie)) {
    additionalRoles.push(Role.Guildie);
  }

  if (currentMemberRoles.has(Role.Officer)) {
    additionalRoles.push(Role.Officer);
  }

  const numberOfMainClasses = getNumberOfMainClasses(filteredClasses);

  if (numberOfMainClasses > 1) {
    message.channel.send(
      `You need only one main class!${NEW_LINE}` +
      `Bad example: !iam acolyte swordsman priest${NEW_LINE}` +
      `Good example: !iam acolyte priest assassin knight${NEW_LINE}`
    )

    return;
  }

  if (numberOfMainClasses === 0) {
    if (hasDifferentMainClass(filteredClasses)) {
      message.channel.send('You didn\'t give me a main class but you gave me two different subclasses!');

      return;
    }

    additionalRoles.push(ClassId[MainClassBySubClass[filteredClasses[0]]]);
  }

  const mainClass = getMainClass(filteredClasses);

  if (mainClass.length > 0 && filteredClasses.length > 1 &&
      !filteredClasses.some(filteredClass => SubClassesByMainClass[mainClass].includes(filteredClass))) {
    message.channel.send(
      'Your main class and subclasses don\'t match! If you have subclasses, at least one has to match with your main class!'
    );

    return;
  }

  if (filteredClasses.includes(SubClass.Dancer) && filteredClasses.includes(SubClass.Bard)) {
    message.channel.send('You can\'t be a Bard AND a Dancer at the same time!');

    return;
  }

  currentMember.setRoles([
    ...additionalRoles,
    ...filteredClasses.map(filteredClass => ClassId[filteredClass]),
  ]);

  message.channel.send('Your classes have been set!');
};
