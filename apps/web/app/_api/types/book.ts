import { READING_STATUS } from 'app/_constants/status';

import { Error, ResultType } from './common';
import { ResponseFormat } from './response';

export type Book = {
  title: string;
  author: string;
  publishedAt: string;
  thumbnailUrl: string;
};

export type NewBook = {
  title: string;
  author: string;
  publishedAt: string;
  thumbnailUrl: string;
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
  id: string;
  readStatus: READING_STATUS;
  publishedAt?: string;
  createdAt?: Date;
  completedAt?: string;
};

export type GetBookListAPIRequest = {
  memberId: string;
  readStatus?: READING_STATUS;
};

export type GetBookListAPIResponse = ResponseFormat<{
  totalBookCount: number;
  bookList: MemberBook[];
}>;

export type GetBookDetailAPIRequest = {
  bookId: string;
};

export type GetBookDetailAPIResponse = ResponseFormat<MemberBook>;

export type UpdateBookAPIRequest = {
  bookId: string;
  title: string;
  author: string;
  publishedAt: string;
  readStatus: READING_STATUS;
};
