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

export type GetMemberCompletedBookAPIResponse = ResponseFormat<{
  completedBookCount: number;
}>;
