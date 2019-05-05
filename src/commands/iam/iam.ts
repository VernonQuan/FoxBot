import { Message } from 'discord.js';

import { SPACE, Role } from '../../common/constants';
import { MainClass, SubClass, MainClassBySubClass, SubClassesByMainClass, ClassId } from './constants';
import { getNumberOfMainClasses, filterActualClasses, hasDifferentMainClass, getMainClass } from './utils';
import * as iamMessages from './messages';

export const iamCommands = (message: Message, classes: string): void => {
  const {
    member: currentMember,
    member: {
      roles: currentMemberRoles,
    },
  } = message;
  if (!currentMemberRoles || !(currentMemberRoles.has(Role.Guest) ||currentMemberRoles.has(Role.Guildie) || currentMemberRoles.has(Role.Officer))) {
    message.channel.send(iamMessages.unauthorized);

    return;
  }

  if (classes.length === 0) {
    message.channel.send(iamMessages.info);
    message.channel.send(iamMessages.infoExample);

    return;
  }


  const filteredClasses = filterActualClasses(classes.toLowerCase().split(SPACE));
  const additionalRoles = [];

  if (filteredClasses.length === 0) {
    message.channel.send(iamMessages.noValidClasses);

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
    message.channel.send(iamMessages.onlyOneMainClass);
    message.channel.send(iamMessages.oneMainClassExample);

    return;
  }

  if (numberOfMainClasses === 0) {
    if (hasDifferentMainClass(filteredClasses)) {
      message.channel.send(iamMessages.noValidClasses);

      return;
    }

    additionalRoles.push(ClassId[MainClassBySubClass[filteredClasses[0]]]);
  }

  const mainClass = getMainClass(filteredClasses);

  if (mainClass === MainClass.Novice && filteredClasses.length > 1) {
    message.channel.send(iamMessages.novice);

    return;
  }

  if (mainClass.length > 0 && filteredClasses.length > 1 &&
      !filteredClasses.some(filteredClass => SubClassesByMainClass[mainClass].includes(filteredClass))) {
    message.channel.send(iamMessages.noMatch);

    return;
  }

  if (filteredClasses.includes(SubClass.Dancer) && filteredClasses.includes(SubClass.Bard)) {
    message.channel.send(iamMessages.bardAndDancer);

    return;
  }

  currentMember.setRoles([
    ...additionalRoles,
    ...filteredClasses.map(filteredClass => ClassId[filteredClass]),
  ]);

  message.channel.send(iamMessages.success);
};
