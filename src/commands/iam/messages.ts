import { RichEmbed } from 'discord.js';

import { NEW_LINE, SPACE } from '../../common/constants';
import { MainClass, SubClass } from './constants';

export const unauthorized = 'You need to be at least a guest to set your class!';
export const info = `Do you want to set your class?${NEW_LINE}` +
  `You can only have one main class but as many sub classes as you want${NEW_LINE}` +
  `You can also put just one subclass or two subclasses if they have the same main class!${NEW_LINE}`;
export const noValidClasses = 'You did not give me any valid classes!';
export const onlyOneMainClass = 'You only need one main class!';
export const twoSubClasses = 'You didn\'t give me a main class but you gave me two different subclasses!';
export const novice = 'Silly novice, you can\'t be any class other than a novice!';
export const noMatch = 'Your main class and subclasses don\'t match! If you have subclasses, at least one has to match with your main class!';
export const bardAndDancer = 'You can\'t be a Bard AND a Dancer at the same time!';
export const success = 'Your classes have been set!';

export const infoExample = new RichEmbed({
  fields: [
    {
      name: 'Main Classes:',
      value: Object.keys(MainClass).join(SPACE),
    },
    {
      name: 'Sub Classes:',
      value: Object.keys(SubClass).join(SPACE),
    },
    {
      name: 'Examples:',
      value: `!iam wizard priest acolyte${NEW_LINE}` +
             `!iam wizard${NEW_LINE}` +
             `!iam knight crusader${NEW_LINE}`,
    },
  ],
});

export const oneMainClassExample = new RichEmbed({
  fields: [
    {
      name: 'Bad example:',
      value: '!iam acolyte swordsman priest',
    },
    {
      name: 'Good example:',
      value: '!iam acolyte priest assassin knight',
    },
  ],
});
