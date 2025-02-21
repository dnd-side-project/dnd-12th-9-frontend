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
  add: () => [...bookQueryKeys.all(), 'add'],
  search: () => [...bookQueryKeys.all(), 'search'],
  count: () => [...bookQueryKeys.all(), 'count'],
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
  search: (bookName: string) =>
    infiniteQueryOptions({
      queryKey: [...bookQueryKeys.search(), bookName],
      queryFn: ({ pageParam = 1 }) => getBookSearchAPI(bookName, Number(pageParam)),
      getNextPageParam: (lastPage: SearchBookResponse) => {
        return lastPage.data.pageInfo?.isEnd === false
          ? lastPage.data.pageInfo?.page + 1
          : undefined;
      },
      initialPageParam: 1,
      enabled: !!bookName,
    }),
  count: (memberId: string) =>
    queryOptions({
      queryKey: [...bookQueryKeys.count()],
      queryFn: () => getMemberCompletedBookAPI(memberId),
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

const getBookSearchAPI = (bookName: string, pageParam: number) =>
  fetcher.get<SearchBookResponse>(`books?query=${bookName}&page=${pageParam}`);

const getMemberCompletedBookAPI = (memberId: string) =>
  fetcher.get<GetMemberCompletedBookCountAPIResponse>(`completed-books/members/${memberId}/count`);
