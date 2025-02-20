import { queryOptions } from '@tanstack/react-query';

import { READING_STATUS } from 'app/_constants/status';

import { fetcher } from '../fetcher';
import {
  GetBookDetailAPIRequest,
  GetBookDetailAPIResponse,
  GetBookListAPIRequest,
  GetBookListAPIResponse,
} from '../types/book';

export const bookQueryKeys = {
  all: () => ['books'],
  lists: () => [...bookQueryKeys.all(), 'list'],
  details: () => [...bookQueryKeys.all(), 'detail'],
};

export const bookQueryOptions = {
  list: (memberId: string, readStatus?: READING_STATUS) =>
    queryOptions({
      queryKey: [...bookQueryKeys.lists(), memberId, readStatus],
      queryFn: () => getBookListAPI({ memberId, readStatus }),
    }),
  detail: (bookId: string) =>
    queryOptions({
      queryKey: [...bookQueryKeys.details(), bookId],
      queryFn: () => getBookDetailAPI({ bookId }),
    }),
};

const getBookListAPI = ({ memberId, readStatus }: GetBookListAPIRequest) => {
  const searchParams = readStatus ? { readStatus } : undefined;

  return fetcher.get<GetBookListAPIResponse>(`books/members/${memberId}`, {
    searchParams,
  });
};

const getBookDetailAPI = ({ bookId }: GetBookDetailAPIRequest) =>
  fetcher.get<GetBookDetailAPIResponse>(`books/${bookId}`);
