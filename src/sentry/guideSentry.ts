import { Message, RichEmbed } from 'discord.js';

export const sentinelMessages = (message: Message) => {
  const { content, author } = message;
  if (!content.includes('http')) {
    message.delete();
    author.send('Please do not chat in the guides channel! If you want to chat about it, please go to general or fox-chat. In case you didn\'t want to lose whatever you sent. This is what you said in guides:');
    author.send(new RichEmbed({
      description: content,
    }));
  }
};
