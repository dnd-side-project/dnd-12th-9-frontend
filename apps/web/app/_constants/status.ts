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

export const MY_READING_STATUS_TEXT = {
  prev: {
    image: BLACKY_PREV,
    text: '읽기 전이에요',
    readStatus: 'WANT_TO_READ',
  },
  ing: {
    image: BLACKY_ING,
    text: '읽는 중이에요',
    readStatus: 'READING',
  },
  done: {
    image: BLACKY_DONE,
    text: '완독했어요!',
    readStatus: 'COMPLETED',
  },
} as const;

export type READING_STATUS = 'WANT_TO_READ' | 'READING' | 'COMPLETED';

export type ReadStatusTag = READING_STATUS | 'ALL';

export const READ_STATUS_LIST = [
  { value: 'ALL', text: '전체' },
  { value: 'WANT_TO_READ', text: '읽기 전' },
  { value: 'READING', text: '읽는 중' },
  { value: 'COMPLETED', text: '완독' },
] satisfies {
  value: ReadStatusTag;
  text: string;
}[];
