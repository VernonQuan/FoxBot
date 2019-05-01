import { Message } from 'discord.js';

import { jokes, TimestampInSec } from './constants';

export const generateJoke = (message: Message): void => {
  const randomNumber = Math.floor(Math.random() * jokes.length);
  const { question, answer } = jokes[randomNumber];

  message.channel.send(question);
  setTimeout(() => message.channel.send(answer), TimestampInSec.FiveSeconds);
}
