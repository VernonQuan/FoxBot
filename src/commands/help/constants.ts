import { ResponseMessages, Command } from '../../common/constants';

export const helpMessages: ResponseMessages = {
  [Command.Help]: 'That\'s this menu right here!',
  [Command.ET]: 'You need the current bosses for this week?',
  [Command.Prices]: 'for all your trading needs!',
  [Command.Runes]: 'A list of special runes and the grid for that class!',
  [Command.Whenis]: 'Do you need the time for events?',
  [Command.SetGuest]: 'You have a guest? You can show them in with "!setguest @name"!',
  [Command.SetGuildie]: '(Officers Only) You can make someone a guildmate with "!setguildie @name!"',
  [Command.Author]: 'If you want to know who made me!',
  [Command.Iam]: 'Do you need to set your classes? You can do it here!',
  [Command.Joke]: 'You wanna hear a joke?',
  [Command.Thank]: 'This isn\'t anything much but you can use this to thank me!',
};
