import { JobPackage } from '../common/constants';
import { scheduledMessages, manageAttendance } from './index';

export const processJobs = (jobPackage: JobPackage): void => {
  scheduledMessages(jobPackage.scheduledMessages);
  manageAttendance(jobPackage.attendanceManagement);
};
