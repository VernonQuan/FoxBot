import { DaysOfWeek, TimeOfDay, Minutes, ResponseMessages, TimestampInMs } from '../../common/constants';

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
  Ufo = 'bigcatufo',
}

export const EVENT_LABEL: ResponseMessages = {
  [Event.WoE]: 'WoE',
  [Event.PoringBattle]: 'Poring Battle',
  [Event.MvpBattle]: 'MVP Battle',
  [Event.Ufo]: 'Big Cat UFO',
};

export type EventTime = {
  [index: string]: {
    days: number[],
    hour: number,
    minute: number,
    duration: number,
  },
};

export const eventTimes: EventTime = {
  [Event.MvpBattle]: {
    days: [DaysOfWeek.Saturday],
    hour: TimeOfDay.OneAM,
    minute: Minutes.Zero,
    duration: TimestampInMs.ThreeHours,
  },
  [Event.PoringBattle]: {
    days: [DaysOfWeek.Thursday],
    hour: TimeOfDay.TwoAM,
    minute: Minutes.Zero,
    duration: TimestampInMs.ThirtyMinutes,
  },
  [Event.WoE]: {
    days: [DaysOfWeek.Friday, DaysOfWeek.Monday],
    hour: TimeOfDay.ThreeAM,
    minute: Minutes.Zero,
    duration: TimestampInMs.OneHour,
  },
  [Event.Ufo]: {
    days: [DaysOfWeek.Sunday],
    hour: TimeOfDay.TwoAM,
    minute: Minutes.Zero,
    duration: TimestampInMs.ThirtyMinutes,
  },
};
