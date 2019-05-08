import { TextChannel } from 'discord.js'
import { DaysOfWeek, TimeOfDay, Minutes, Role } from '../common/constants';

export const scheduledMessages = (channel: TextChannel) => {
  const now = new Date();
  const currentDay = now.getUTCDay();
  const currentHour = now.getUTCHours();
  const currentMinute = now.getUTCMinutes();
  const guildie = channel.guild.roles.find(role => role.id === Role.Guildie);
  if (!guildie) {
    return;
  }

  if (currentDay === DaysOfWeek.Friday || currentDay === DaysOfWeek.Monday) {
    if (currentHour === TimeOfDay.Midnight && currentMinute === Minutes.FortyFive) {
      channel.send(`There's a little more than two hours until WoE ${guildie}s! Remember to change channels!`);
    }

    if (currentHour === TimeOfDay.TwoAM && currentMinute === Minutes.Thirty) {
      channel.send(`It's almost time for WoE ${guildie}s! Let\'s suit up!`);
    }

    if (currentHour === TimeOfDay.ThreeAM && currentMinute === Minutes.Zero) {
      channel.send(`It's time for WoE ${guildie}s! Good luck!`);
    }
  }

  if (currentDay === DaysOfWeek.Thursday && currentHour === TimeOfDay.TwoAM && currentMinute === Minutes.Zero) {
    channel.send(`It's time for Poring Battle ${guildie}s!`);
  }

  if (currentDay === DaysOfWeek.Saturday && currentHour === TimeOfDay.OneAM && currentMinute === Minutes.Zero) {
    channel.send(`It's time for MVP Battle ${guildie}s! Let's group up and go for it!`);
  }
};
