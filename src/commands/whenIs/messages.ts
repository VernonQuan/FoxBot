import { RichEmbed } from 'discord.js';

import { bold } from '../../common/utils';
import { NEW_LINE } from '../../common/constants';
import { Event } from './constants';
import { generateBaseTimeMessage, getTimeUntilEvent } from './utils';

export const info = 'These are the times for the following events!!';

export const generateTime = () => new RichEmbed({
  description: Object.keys(Event).map((event) => (
    `${bold(event)} - ${generateBaseTimeMessage(getTimeUntilEvent(event.toLowerCase()))}`
  )).join(NEW_LINE),
});
