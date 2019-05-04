export const NEW_LINE = '\n';
export const SPACE = ' ';

export enum TimestampInMs {
  FiveSeconds = 5000,
  OneMinute = 60000,
}

export enum DaysOfWeek {
  Sunday = 0,
  Monday = 1,
  Tuesday = 2,
  Wednesday = 3,
  Thursday = 4,
  Friday = 5,
  Saturday = 6,
}

export enum Minutes {
  Zero = 0,
  Fifteen = 15,
  Thirty = 30,
  FortyFive = 45,
}

export enum TimeOfDay {
  Midnight = 0,
  OneAM = 1,
  TwoAM = 2,
  ThreeAM = 3,
  FourAM = 4,
  FiveAM = 5,
  SixAM = 6,
  SevenAM = 7,
  EightAM = 8,
  NineAM = 9,
  TenAM = 10,
  ElevenAM = 11,
  Noon = 12,
  OnePM = 13,
  TwoPM = 14,
  ThreePM = 15,
  FourPM = 16,
  FivePM = 17,
  SixPM = 18,
  SevenPM = 19,
  EightPM = 20,
  NinePM = 21,
  TenPM = 22,
  ElevenPM = 23,
}

export type ResponseMessages = {
  [index: string]: string,
}

export enum Command {
  Thank = 'thanks',
  Help = 'help',
  Guide = 'guide',
  Author = 'author',
  Runes = 'runes',
  Prices = 'prices',
  SetGuest = 'setguest',
  SetGuildie = 'setguildie',
  Joke = 'joke',
  Iam = 'iam',
}

export const helpMessages: ResponseMessages = {
  [Command.Help]: 'That\'s this menu right here!',
  [Command.Guide]: 'A bunch of guides that my slaves... I mean guildmates helped compile!',
  [Command.Prices]: 'for all your trading needs!',
  [Command.Runes]: 'A list of special runes and the grid for that class!',
  [Command.SetGuest]: 'You have a guest? You can show them in with "!setguest @name"!',
  [Command.SetGuildie]: '(Officers Only) You can make someone a guildmate with "!setguildie @name!"',
  [Command.Author]: 'If you want to know who made me!',
  [Command.Iam]: 'Do you need to set your classes? You can do it here!',
  [Command.Joke]: 'You wanna hear a joke?',
  [Command.Thank]: 'This isn\'t anything much but you can use this to thank me!',
};

export enum Guide {
  ET = 'et',
  Prices = 'prices',
}

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

export enum Role {
  Guildie = '571135421392879637',
  Officer = '570705061420990501',
  Guest = '570786681897222188',
  Acolyte = '570631297710555186',
  Archer = '570698806140731392',
  Magician = '570698449771692033',
  Merchant = '570698596354097169',
  Swordsman = '570698385007443989',
  Thief = '570698908892659724',
  Alchemist = '570699925872967730',
  Assassin = '570699971104604175',
  Bard = '570704481642086426',
  Blacksmith = '570699885154926612',
  Crusader = '570699565158629387',
  Dancer = '570704471278092315',
  Hunter = '570699787381506049',
  Knight = '570699532011044866',
  Monk = '570699708490579975',
  Priest = '570699599010988043',
  Rogue = '570699999730466817',
  Sage = '570704597903998987',
  Wizard = '570699761934663682',
  Novice = '573937590051536906',
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

export type Joke = {
  question: string,
  answer: string,
};

export const jokes: Joke[] = [
  {
    question: 'What do you call a fox with a carrot in each ear?',
    answer: 'Anything you want as he can\'t hear you!',
  },
  {
    question: 'What did the grape say when the fox stood on it?',
    answer: 'Nothing, it just let out a little wine!',
  },
  {
    question: 'Did you hear about the veterinarian who learned to talk with foxes?',
    answer: 'She was crazy like a fox.',
  },
  {
    question: 'When does a fox go "moo"?',
    answer: 'When it is learning a new language!',
  },
  {
    question: 'When do you have to dance like a fox?',
    answer: 'When you\'re doing the fox trot!',
  },
  {
    question: 'I\'ve been fox hunting again...',
    answer: 'or "stalking" as my ginger ex-girlfriend calls it',
  },
  {
    question: 'A guy brings a fox home, tells his wife it\'s a pet. She asks, "Where are you going to keep it?" He replies, "In the bedroom." "But what about that horrible nasty smell?", she asks.',
    answer: 'I got used to you, I\'m sure he will too!',
  },
  {
    question: 'Why did the fox cross the road?',
    answer: 'To prove to the possum that it could be done!',
  },
  {
    question: 'How do you become the coach of the Chicago Bears?',
    answer: 'Be sly as a Fox.',
  },
  {
    question: 'Can I borrow your cellphone?',
    answer: 'I need to call animal control cause I just saw a fox!',
  },
  {
    question: 'It\'s hunting season',
    answer: 'and a fox like you shouldn\'t be out in the open!',
  },
  {
    question: 'Did you hear about the shapeshifter that met Medusa?',
    answer: 'Now she\'s a stone cold fox.',
  },
  {
    question: 'Girl, if you were a dinosaur,',
    answer: 'you\'d be a Foxasaurus',
  },
  {
    question: 'What does a fox call a bunny?',
    answer: 'Fast Food',
  },
  {
    question: 'What does the Fox say?',
    answer: 'I\'m canceling all your favorite shows!',
  },
  {
    question: 'Dear FOX news',
    answer: 'I have yet to see any news about foxes.\nSincerely, Disappointed viewer',
  },
  {
    question: 'Did you hear about that one blonde fox that got stuck in a trap?',
    answer: 'She chewed off three legs and was still stuck!',
  },
];
