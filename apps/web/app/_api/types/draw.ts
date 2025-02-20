import { Error, ResultType } from './common';

export type Item = {
  name: string;
  code: string;
  message: string;
};

export type ItemDrawResponse = {
  resultType: ResultType;
  data: Item;
  error: Error;
};
