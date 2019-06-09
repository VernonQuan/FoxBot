import { JobPackage } from '../common/constants';
import { scheduledMessages } from './index';

export const processJobs = (jobPackage: JobPackage): void => {
  scheduledMessages(jobPackage.scheduledChannels);
  // manageAttendance(jobPackage.attendanceManagement);
};
