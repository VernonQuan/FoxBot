import { ResponseMessages } from '../../common/constants';

export enum Runes {
  Monk = 'monk',
  Blacksmith = 'blacksmith',
  Crusader = 'crusader',
  Knight = 'knight',
  Hunter = 'hunter',
  Wizard = 'wizard',
  Assassin = 'assassin',
  Priest = 'priest',
  Simulator = 'simulator'
}

export const RUNES_BASE_URL = 'https://docs.google.com/spreadsheets/d/1Dq0ZRlfw7G1hFKJ0O8uA9TescbwiB0OayuP7JUKagcA/edit#gid=';

export const RUNES_CLASS_URL: ResponseMessages = {
  [Runes.Assassin]: '175546539',
  [Runes.Blacksmith]: '1202093942',
  [Runes.Crusader]: '347103508',
  [Runes.Hunter]: '2081144406',
  [Runes.Knight]: '783465799',
  [Runes.Monk]: '141177983',
  [Runes.Priest]: '1361503914',
  [Runes.Wizard]: '2045429025',
};

export const runeMessage: ResponseMessages = {
  [Runes.Simulator]: 'If you need help planning for your runes!',
  [Runes.Assassin]: 'Assassin / Assassin Cross / Guillotine Cross',
  [Runes.Blacksmith]: 'Blacksmith / Whitesmith / Mechanic',
  [Runes.Crusader]: 'Crusader / Paladin / Royal Guard',
  [Runes.Hunter]: 'Hunter / Sniper / Ranger',
  [Runes.Knight]: 'Knight / Lord Knight / Rune Knight',
  [Runes.Monk]: 'Monk / Champion / Sura',
  [Runes.Priest]: 'Priest / High Priest / Arch Bishop',
  [Runes.Wizard]: 'Wizard / High Wizard / Warlock',
};
