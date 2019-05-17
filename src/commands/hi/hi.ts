import { Message } from 'discord.js';

export const hi = (message: Message) => {
  const { author, channel } = message;
  const messages: string[] = [
    'https://tenor.com/view/hello-hi-hey-heythere-hithere-gif-5548738',
    `Hi, ${author}!`,
    'https://tenor.com/view/hi-fox-waving-gif-12904438',
  ]
  channel.send(messages[Math.floor(Math.random() * messages.length)]);
};
