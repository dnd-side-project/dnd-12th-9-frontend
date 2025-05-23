import { READING_STATUS } from 'app/_constants/status';

import { Error, ResultType } from './common';
import { ResponseFormat } from './response';

export type Book = {
  title: string;
  author: string;
  publishedAt: string;
  thumbnail: string;
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
  thumbnailUrl: string;
  readStatus: READING_STATUS;
  publishedAt?: string;
  createdAt?: Date;
  completedAt?: string;
  isOwner: boolean;
};

export type GetBookListAPIRequest = {
  ownerId: string;
  readStatus?: READING_STATUS;
};

export type GetBookListAPIResponse = ResponseFormat<{
  isOwner: boolean;
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

export type DeleteBookAPIRequest = {
  memberBookId: string;
};
