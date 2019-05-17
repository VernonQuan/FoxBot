import { Channel, NEW_LINE } from '../../common/constants';
import { etUrl, etSpreadsheet } from './constants';

export const etCommand = (channel: Channel): void => {
  channel.send(
    `So you need help with ET? This is the current week's bosses!${NEW_LINE}` +
    etUrl + NEW_LINE +
    `If that is not updated, you can try using this spreadsheet!${NEW_LINE}` +
    etSpreadsheet
  );
};
