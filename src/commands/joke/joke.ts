import { Channel, TimestampInMs } from '../../common/constants';
import { jokes } from './constants';

export const generateJoke = (channel: Channel): void => {
  const randomNumber = Math.floor(Math.random() * jokes.length);
  const { question, answer } = jokes[randomNumber];

  channel.send(question);
  setTimeout(() => channel.send(answer), TimestampInMs.FiveSeconds);
}
