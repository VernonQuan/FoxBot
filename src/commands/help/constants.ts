import { ResponseMessages, Command } from '../../common/constants';

export const helpMessages: ResponseMessages = {
  [Command.Help]: 'That\'s this menu right here!',
  [Command.Guide]: 'A bunch of guides that my slaves... I mean guildmates helped compile!',
  [Command.Prices]: 'for all your trading needs!',
  [Command.Runes]: 'A list of special runes and the grid for that class!',
  [Command.Whenis]: 'Do you need the time until the next event?',
  [Command.SetGuest]: 'You have a guest? You can show them in with "!setguest @name"!',
  [Command.SetGuildie]: '(Officers Only) You can make someone a guildmate with "!setguildie @name!"',
  [Command.Author]: 'If you want to know who made me!',
  [Command.Iam]: 'Do you need to set your classes? You can do it here!',
  [Command.Joke]: 'You wanna hear a joke?',
  [Command.Thank]: 'This isn\'t anything much but you can use this to thank me!',
};
