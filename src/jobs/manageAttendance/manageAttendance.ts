import { Guild, TextChannel } from 'discord.js';

import { CATEGORIES } from '../../config.json';
import { ChannelType, Role, NEW_LINE, DaysOfWeek, TimeOfDay, Minutes } from '../../common/constants';
import { bold } from '../../common/utils';
import { setTemporaryChannelPermissions } from './utils';

export const manageAttendance = async (guild: Guild | null): Promise<void> => {
  if (!guild) {
    return;
  }

  const now = new Date();
  const currentDay = now.getUTCDay();
  const currentHour = now.getUTCHours();
  const currentMinute = now.getUTCMinutes();

  if ((currentDay === DaysOfWeek.Thursday || currentDay === DaysOfWeek.Sunday) &&
      currentHour === TimeOfDay.FivePM && currentMinute === Minutes.Zero) {
    createAttendance(guild);
  }

  if ((currentDay === DaysOfWeek.Saturday || currentDay === DaysOfWeek.Tuesday) &&
      currentHour === TimeOfDay.FourAM && currentMinute === Minutes.Zero) {
    deleteAttendance(guild);
  }
};

export const createAttendance = async (guild: Guild): Promise<void> => {
  guild.createChannel('attendance', 'text').then(async (channel) => {
    if (!channel || !((channel): channel is TextChannel => channel.type === ChannelType.Text) (channel)) {
      return;
    }

    const roTalk = await guild.channels.find(category => category.id === CATEGORIES.RAGNAROK_TALK);
    if (!roTalk) {
      return;
    }

    await setTemporaryChannelPermissions(channel, guild);
    await channel.setParent(roTalk);
    const guildie = await channel.guild.roles.find(role => role.id === Role.Guildie);
    if (!guildie) {
      return;
    }

    channel.send(
      `Hi ${guildie}s! There's WoE today! This channel for taking WoE attendance!${NEW_LINE}` +
      `Please say ${bold('here')} or ${bold('absent')} to let us know if you're going to be here or not!${NEW_LINE}` +
      `If you change your mind later. You can always change your ${bold('here')} or ${bold('absent')} status!${NEW_LINE}` +
      'I will only keep track of your latest status! Your previous status will be deleted!'
    );
  });
};

export const deleteAttendance = async (guild: Guild): Promise<void> => {
  const attendanceChannel = await guild.channels.find(channel => channel.name === 'attendance');

  if (!attendanceChannel) {
    return;
  }

  attendanceChannel.delete();
};
