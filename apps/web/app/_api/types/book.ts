import { READING_STATUS } from 'app/_constants/status';

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
  resultType: 'SUCCESS' | 'ERROR';
  data: {
    books: Book[];
    pageInfo: {
      isEnd: boolean;
      pageableCount: number;
      totalCount: number;
      page: number;
    };
  };
  error: {
    code: string;
    message: string;
    data: object;
  };
};

export type MemberBook = Book & {
  readStatus: READING_STATUS;
  publishedAt?: '2025-02-20';
  createdAt?: '2025-02-20T03:32:50.750Z';
  completedAt?: '2025-02-20';
};

export type GetBookListAPIRequest = {
  memberId: string;
  readStatus?: READING_STATUS;
};

export type GetBookListAPIResponse = {
  resultType: 'SUCCESS';
  data: {
    bookList: MemberBook[];
  };
  error: {
    code: 'string';
    message: 'string';
    data: {};
  };
};

export type GetBookDetailAPIRequest = {
  bookId: string;
};

export type GetBookDetailAPIResponse = {
  resultType: 'SUCCESS';
  data: {
    bookList: MemberBook;
  };
  error: {
    code: 'string';
    message: 'string';
    data: {};
  };
};
