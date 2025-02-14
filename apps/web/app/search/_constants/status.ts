import BLACKY_DONE from '@public/BLACKY_DONE.png';
import BLACKY_ING from '@public/BLACKY_ING.png';
import BLACKY_PREV from '@public/BLACKY_PREV.png';

export const STATUS_DATA = {
  prev: {
    image: BLACKY_PREV,
    text: '읽기 전',
    readStatus: 'WANT_TO_READ',
  },
  ing: {
    image: BLACKY_ING,
    text: '읽는 중',
    readStatus: 'READING',
  },
  done: {
    image: BLACKY_DONE,
    text: '완독',
    readStatus: 'COMPLETED',
  },
} as const;

export type READING_STATUS = 'WANT_TO_READ' | 'READING' | 'COMPLETED';
