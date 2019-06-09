import { Guild, TextChannel, DMChannel, GroupDMChannel } from 'discord.js';

export const NEW_LINE = '\n';
export const SPACE = ' ';

export type Channel = TextChannel | DMChannel | GroupDMChannel;
export enum TimestampInMs {
  OneSecond = 1000,
  FiveSeconds = 5000,
  OneMinute = 60000,
  ThirtyMinutes = 1800000,
  OneHour = 3600000,
  ThreeHours = 10800000,
  OneDay = 86400000,
  SevenDays = 604800000,
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
  Whenis = 'whenis',
  ET = 'et',
}

export enum Role {
  Guildie = '571135421392879637',
  Officer = '570705061420990501',
  Guest = '570786681897222188',
  Bot = '571386512961437697',
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

export enum ChannelType {
  Dm = 'dm',
  Text = 'text',
  Group = 'group',
  Voice = 'voice',
  Category = 'category',
}

export enum ScheduleChannel {
  PvP = 'pvp',
  PvE = 'pve',
};

export type scheduledMessageChannels = {
  [ScheduleChannel.PvE]: TextChannel | null,
  [ScheduleChannel.PvP]: TextChannel | null,
};

export type JobPackage = {
  scheduledChannels: scheduledMessageChannels,
  attendanceManagement: Guild | null,
};
