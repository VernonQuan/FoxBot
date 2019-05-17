import { Message } from 'discord.js';

import { SPACE, Role } from '../../common/constants';
import { MainClass, SubClass, MainClassBySubClass, SubClassesByMainClass, ClassId } from './constants';
import { getNumberOfMainClasses, filterActualClasses, hasDifferentMainClass, getMainClass } from './utils';
import { GUILDS } from '../../config.json';
import * as iamMessages from './messages';

export const iamCommands = (message: Message, classes: string): void => {
  const foxGuild = message.client.guilds.array().find(guild => guild.id === GUILDS.FOX);
  const { channel } = message;

  if (!foxGuild) {
    channel.send(iamMessages.noGuild);

    return;
  }

  const currentMember = foxGuild.members.array().find(member => member.id === message.author.id);

  if (!currentMember) {
    channel.send(iamMessages.notInGuild);

    return;
  }

  const { roles: currentMemberRoles } = currentMember;
  if (!currentMemberRoles || !(currentMemberRoles.has(Role.Guest) ||currentMemberRoles.has(Role.Guildie) || currentMemberRoles.has(Role.Officer))) {
    channel.send(iamMessages.unauthorized);

    return;
  }

  if (classes.length === 0) {
    channel.send(iamMessages.info, iamMessages.infoExample);

    return;
  }

  const filteredClasses = filterActualClasses(classes.toLowerCase().split(SPACE));
  const additionalRoles = [];

  if (filteredClasses.length === 0) {
    channel.send(iamMessages.noValidClasses);

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
    channel.send(iamMessages.onlyOneMainClass, iamMessages.oneMainClassExample);

    return;
  }

  if (numberOfMainClasses === 0) {
    if (hasDifferentMainClass(filteredClasses)) {
      channel.send(iamMessages.twoSubClasses);

      return;
    }

    additionalRoles.push(ClassId[MainClassBySubClass[filteredClasses[0]]]);
  }

  const mainClass = getMainClass(filteredClasses);

  if (mainClass === MainClass.Novice && filteredClasses.length > 1) {
    channel.send(iamMessages.novice);

    return;
  }

  if (mainClass.length > 0 && filteredClasses.length > 1 &&
      !filteredClasses.some(filteredClass => SubClassesByMainClass[mainClass].includes(filteredClass))) {
    channel.send(iamMessages.noMatch);

    return;
  }

  if (filteredClasses.includes(SubClass.Dancer) && filteredClasses.includes(SubClass.Bard)) {
    channel.send(iamMessages.bardAndDancer);

    return;
  }

  currentMember.setRoles([
    ...additionalRoles,
    ...filteredClasses.map(filteredClass => ClassId[filteredClass]),
  ]);

  channel.send(iamMessages.success);
};
