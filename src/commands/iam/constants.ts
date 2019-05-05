import { ResponseMessages } from '../../common/constants';

export enum MainClass {
  Acolyte = 'acolyte',
  Archer = 'archer',
  Magician = 'magician',
  Merchant = 'merchant',
  Swordsman = 'swordsman',
  Thief = 'thief',
  Novice = 'novice',
}

export enum SubClass {
  Alchemist = 'alchemist',
  Assassin = 'assassin',
  Bard = 'bard',
  Blacksmith = 'blacksmith',
  Crusader = 'crusader',
  Dancer = 'dancer',
  Hunter = 'hunter',
  Knight = 'knight',
  Monk = 'monk',
  Priest = 'priest',
  Rogue = 'rogue',
  Sage = 'sage',
  Wizard = 'wizard',
}

export const ClassId: ResponseMessages = {
  [MainClass.Acolyte]: '570631297710555186',
  [MainClass.Archer]: '570698806140731392',
  [MainClass.Magician]: '570698449771692033',
  [MainClass.Merchant]: '570698596354097169',
  [MainClass.Swordsman]: '570698385007443989',
  [MainClass.Thief]: '570698908892659724',
  [MainClass.Novice]: '573937590051536906',
  [SubClass.Alchemist]: '570699925872967730',
  [SubClass.Assassin]: '570699971104604175',
  [SubClass.Bard]: '570704481642086426',
  [SubClass.Blacksmith]: '570699885154926612',
  [SubClass.Crusader]: '570699565158629387',
  [SubClass.Dancer]: '570704471278092315',
  [SubClass.Hunter]: '570699787381506049',
  [SubClass.Knight]: '570699532011044866',
  [SubClass.Monk]: '570699708490579975',
  [SubClass.Priest]: '570699599010988043',
  [SubClass.Rogue]: '570699999730466817',
  [SubClass.Sage]: '570704597903998987',
  [SubClass.Wizard]: '570699761934663682',
};

export const MainClassBySubClass: ResponseMessages = {
  [SubClass.Alchemist]: MainClass.Merchant,
  [SubClass.Assassin]: MainClass.Thief,
  [SubClass.Bard]: MainClass.Archer,
  [SubClass.Blacksmith]: MainClass.Merchant,
  [SubClass.Crusader]: MainClass.Swordsman,
  [SubClass.Dancer]: MainClass.Archer,
  [SubClass.Hunter]: MainClass.Archer,
  [SubClass.Knight]: MainClass.Swordsman,
  [SubClass.Monk]: MainClass.Acolyte,
  [SubClass.Priest]: MainClass.Acolyte,
  [SubClass.Rogue]: MainClass.Thief,
  [SubClass.Sage]: MainClass.Magician,
  [SubClass.Wizard]: MainClass.Magician,
};

export const SubClassesByMainClass: {
  [index: string]: string[],
} = {
  [MainClass.Novice]: [],
  [MainClass.Acolyte]: [SubClass.Monk, SubClass.Priest],
  [MainClass.Archer]: [SubClass.Bard, SubClass.Dancer, SubClass.Hunter],
  [MainClass.Magician]: [SubClass.Sage, SubClass.Wizard],
  [MainClass.Merchant]: [SubClass.Alchemist, SubClass.Blacksmith],
  [MainClass.Swordsman]: [SubClass.Crusader, SubClass.Knight],
  [MainClass.Thief]: [SubClass.Assassin, SubClass.Rogue],
};
