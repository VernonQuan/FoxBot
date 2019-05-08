import { RichEmbed } from 'discord.js';

import { generateInfoMenu } from '../../common/utils';
import { helpMessages } from './constants';

export const info = 'You can use the following commands with me! Just use "!" followed by that command!';
export const infoEmbed = new RichEmbed({
  description: generateInfoMenu(helpMessages),
});
