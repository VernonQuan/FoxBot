import { Channel, TimestampInMs } from '../../common/constants';
import { jokes } from './constants';

export const generateJoke = (channel: Channel): void => {
  const { question, answer } = jokes[Math.floor(Math.random() * jokes.length)];

  channel.send(question);
  setTimeout(() => channel.send(answer), TimestampInMs.FiveSeconds);
};
