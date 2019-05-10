import moment from 'moment';

import { eventTimes, TimeUntil, TimeDenomination, EVENT_LABEL } from './constants';
import { TimestampInMs } from '../../common/constants';

export const getTimeUntilEvent = (event: string): TimeUntil => {
  const now = moment(Date.now()).valueOf();
  const currentEventTimes = eventTimes[event];
  const possibleEventTimes = currentEventTimes.days.map((day) => {
    const timestamp = moment.utc().weekday(day).hour(currentEventTimes.hour).minute(currentEventTimes.minute).valueOf();
    return (timestamp - now + TimestampInMs.SevenDays) % TimestampInMs.SevenDays;
  });

  const timeUntilEvent = moment.duration(Math.min(...possibleEventTimes));

  return {
    [TimeDenomination.Day]: timeUntilEvent.days(),
    [TimeDenomination.Hour]: timeUntilEvent.hours(),
    [TimeDenomination.Minute]: timeUntilEvent.minutes(),
  };
};

export const generateTimeMessage = (timeUntil: TimeUntil): string => {
  const nonZeroDenominations = Object.keys(timeUntil).filter((key) => timeUntil[key] > 0);
  let message = 'There ';

  nonZeroDenominations.forEach((denomination, index) => {
    const addS = timeUntil[denomination] > 1;

    if (index === 0) {
      message = `${message}${addS ? 'are' : 'is'} `;
    }
    if (index !== 0) {
      if (index === nonZeroDenominations.length - 1) {
        message = `${message} and `;
      } else {
        message = `${message}, `;
      }
    }

    message = `${message}${timeUntil[denomination]} ${denomination}${addS ? 's' : ''}`;
  });

  return `${message}`;
};

export const generateBaseTimeMessage = (timeUntil: TimeUntil): string => {
  const nonZeroDenominations = Object.keys(timeUntil).filter((key) => timeUntil[key] > 0);
  let message = '';

  nonZeroDenominations.forEach((denomination, index) => {
    const addS = timeUntil[denomination] > 1;

    if (index !== 0) {
      if (index === nonZeroDenominations.length - 1) {
        message = `${message} and `;
      } else {
        message = `${message}, `;
      }
    }

    message = `${message}${timeUntil[denomination]} ${denomination}${addS ? 's' : ''}`;
  });

  return `${message}`;
};

export const generateMessage = (event: string): string => `${generateTimeMessage(getTimeUntilEvent(event))} until ${EVENT_LABEL[event]}.`;
