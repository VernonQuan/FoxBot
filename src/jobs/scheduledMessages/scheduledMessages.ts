import { DaysOfWeek, TimeOfDay, Minutes, Role, scheduledMessageChannels, ScheduleChannel } from '../../common/constants';

export const scheduledMessages = (channels: scheduledMessageChannels) => {
  const pvpChannel = channels[ScheduleChannel.PvP];
  const pveChannel = channels[ScheduleChannel.PvE];
  if (!channels || Object.keys(channels).length === 0 || !pvpChannel || !pveChannel) {
    return;
  }

  const now = new Date();
  const currentDay = now.getUTCDay();
  const currentHour = now.getUTCHours();
  const currentMinute = now.getUTCMinutes();
  const guildie = pvpChannel.guild.roles.find(role => role.id === Role.Guildie);
  if (!guildie) {
    return;
  }

  if (currentDay === DaysOfWeek.Friday || currentDay === DaysOfWeek.Monday) {
    if (currentHour === TimeOfDay.Midnight && currentMinute === Minutes.FortyFive) {
      pvpChannel.send(`There's a little more than two hours until WoE ${guildie}s! Remember to change channels! Our home channel is currently NA19`);
    }

    if (currentHour === TimeOfDay.TwoAM && currentMinute === Minutes.Thirty) {
      pvpChannel.send(`It's almost time for WoE ${guildie}s! Let\'s suit up!`);
    }
  }

  if (currentDay === DaysOfWeek.Thursday && currentHour === TimeOfDay.TwoAM && currentMinute === Minutes.Zero) {
    pvpChannel.send(`It's time for Poring Battle ${guildie}s!`);
  }

  if (currentDay === DaysOfWeek.Saturday && currentHour === TimeOfDay.OneAM && currentMinute === Minutes.Zero) {
    pvpChannel.send(`It's time for MVP Battle ${guildie}s! Let's group up and go for it!`);
  }

  if (currentDay === DaysOfWeek.Sunday && currentHour === TimeOfDay.TwoAM && currentMinute === Minutes.Zero) {
    pveChannel.send(`Hey ${guildie}s, I see lots of cats in South Prontera. Let's get them!`)
  }
};
