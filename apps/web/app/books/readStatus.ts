export type ReadStatus = 'ALL' | 'WANT_TO_READ' | 'READING' | 'COMPLETED';

export const READ_STATUS_LIST = [
  { value: 'ALL', text: '전체' },
  { value: 'WANT_TO_READ', text: '읽기 전' },
  { value: 'READING', text: '읽는 중' },
  { value: 'COMPLETED', text: '완독' },
] satisfies {
  value: ReadStatus;
  text: string;
}[];
