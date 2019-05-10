import { Message, RichEmbed } from 'discord.js';

export const sentinelMessages = (message: Message) => {
  const { content, author } = message;
  if (!content.includes('http') && message.attachments.size === 0) {
    message.delete();
    author.send('I\'m sorry! I had to delete your post because we\'re trying to keep the guides channel free from clutter! In case you didn\'t want to lose whatever you sent. This is what you said in guides:');
    author.send(new RichEmbed({
      description: content,
    }));
  }
};
