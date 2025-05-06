import { READING_STATUS } from 'app/_constants/status';

import { Error, ResultType } from './common';
import { ResponseFormat } from './response';

export type Point = {
  point: number;
  drawCount: number;
  drawPoint: number;
};

export type MemberPoint = {
  resultType: ResultType;
  data: Point;
  error: Error;
};

export type GetBookCountByStatusAPIRequest = {
  ownerId: string;
  readStatus?: READING_STATUS;
};

export type GetBookCountByStatusAPIResponse = ResponseFormat<{
  bookCount: number;
}>;
