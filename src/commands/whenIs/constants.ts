import { DaysOfWeek, TimeOfDay, Minutes, ResponseMessages } from '../../common/constants';

export enum TimeDenomination {
  Day = 'day',
  Hour = 'hour',
  Minute = 'minute',
}

export type TimeUntil = {
  [index: string]: number,
};

export enum Event {
  WoE = 'woe',
  PoringBattle = 'poringbattle',
  MvpBattle = 'mvpbattle',
}

export const EVENT_LABEL: ResponseMessages = {
  [Event.WoE]: 'WoE',
  [Event.PoringBattle]: 'Poring Battle',
  [Event.MvpBattle]: 'MVP Battle',
};

export type EventTime = {
  [index: string]: {
    days: number[],
    hour: number,
    minute: number,
  },
};

export const eventTimes: EventTime = {
  [Event.MvpBattle]: {
    days: [DaysOfWeek.Saturday],
    hour: TimeOfDay.OneAM,
    minute: Minutes.Zero,
  },
  [Event.PoringBattle]: {
    days: [DaysOfWeek.Thursday],
    hour: TimeOfDay.TwoAM,
    minute: Minutes.Zero,
  },
  [Event.WoE]: {
    days: [DaysOfWeek.Friday, DaysOfWeek.Monday],
    hour: TimeOfDay.ThreeAM,
    minute: Minutes.Zero,
  }
};
