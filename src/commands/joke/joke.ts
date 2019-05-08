import { Message } from 'discord.js';

import { TimestampInMs } from '../../common/constants';
import { jokes } from './constants';

export const generateJoke = (message: Message): void => {
  const { channel } = message;
  const randomNumber = Math.floor(Math.random() * jokes.length);
  const { question, answer } = jokes[randomNumber];

  channel.send(question);
  setTimeout(() => channel.send(answer), TimestampInMs.FiveSeconds);
}
