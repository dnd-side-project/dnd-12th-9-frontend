import { Error, ResultType } from './common';

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
