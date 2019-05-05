import { RichEmbed } from 'discord.js';

import { NEW_LINE } from '../../common/constants';
import { Event } from './constants';

export const info = 'You can find the time until these events!';

export const infoEmbed = new RichEmbed({
  fields: [{
    name: 'Events:',
    value: Object.keys(Event).map(event => event).join(NEW_LINE),
  }]
});
