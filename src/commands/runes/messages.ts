import { RichEmbed } from 'discord.js';

import { NEW_LINE } from '../../common/constants';
import { capitalizeFirst } from '../../common/utils';
import { Runes, RUNES_BASE_URL, RUNES_CLASS_URL, runeMessage, SIMULATOR_URL } from './constants';


export const info = 'These are the current commands for the classes you can use with !runes';

export const infoEmbed = new RichEmbed({
  description: Object.keys(runeMessage).map(rune => (
    rune === Runes.Simulator ?
      `[${capitalizeFirst(rune)}](${SIMULATOR_URL}) - ${runeMessage[rune]}` :
      `[${capitalizeFirst(rune)}](${RUNES_BASE_URL}${RUNES_CLASS_URL[rune]}) - ${runeMessage[rune]}`
  )).join(NEW_LINE),
});
