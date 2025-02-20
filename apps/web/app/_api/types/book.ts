import { READING_STATUS } from 'app/_constants/status';

import { Error, ResultType } from './common';
import { ResponseFormat } from './response';

export type Book = {
  title: string;
  author: string;
  publishedAt: string;
  thumbnail?: string;
};

export type NewBook = {
  title: string;
  author: string;
  publishedAt: string;
  readStatus: 'WANT_TO_READ' | 'READING' | 'COMPLETED';
};

export type SearchBookResponse = {
  resultType: ResultType;
  data: {
    books: Book[];
    pageInfo: {
      isEnd: boolean;
      pageableCount: number;
      totalCount: number;
      page: number;
    };
  };
  error: Error;
};

export type MemberBook = Book & {
  id: number;
  readStatus: READING_STATUS;
  publishedAt?: '2025-02-20';
  createdAt?: '2025-02-20T03:32:50.750Z';
  completedAt?: '2025-02-20';
};

export type GetBookListAPIRequest = {
  memberId: string;
  readStatus?: READING_STATUS;
};

export type GetBookListAPIResponse = ResponseFormat<{
  bookList: MemberBook[];
}>;

export type GetBookDetailAPIRequest = {
  bookId: string;
};

export type GetBookDetailAPIResponse = ResponseFormat<MemberBook>;
