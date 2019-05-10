import { Message } from 'discord.js';

export const checkAttendance = (message: Message) => {
  const { content } = message;
  if (content.toLowerCase() !== 'here' && content.toLowerCase() !== 'absent') {
    message.delete();
  } else {
    const authorMessages = message.channel.messages.filter(channelMessage => channelMessage.author === message.author);
    authorMessages.forEach((authorMessage) => {
      if (authorMessage.id !== message.id) {
        authorMessage.delete();
      }
    });
  }
};
