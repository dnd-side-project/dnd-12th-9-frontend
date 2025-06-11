import { infiniteQueryOptions, queryOptions } from '@tanstack/react-query';

import { READING_STATUS } from 'app/_constants/status';

import { fetcher } from '../fetcher';
import {
  GetBookDetailAPIRequest,
  GetBookDetailAPIResponse,
  GetBookListAPIRequest,
  GetBookListAPIResponse,
  SearchBookResponse,
} from '../types/book';
import {
  GetBookCountByStatusAPIRequest,
  GetBookCountByStatusAPIResponse,
  MemberPoint,
} from '../types/member';

export const bookQueryKeys = {
  all: () => ['books'],
  lists: () => [...bookQueryKeys.all(), 'list'],
  details: () => [...bookQueryKeys.all(), 'detail'],
  add: () => [...bookQueryKeys.all(), 'add'],
  search: () => [...bookQueryKeys.all(), 'search'],
  count: () => [...bookQueryKeys.all(), 'count'],
  point: () => [...bookQueryKeys.all(), 'point'],
};

export const bookQueryOptions = {
  list: (ownerId: string, readStatus?: READING_STATUS) =>
    queryOptions({
      queryKey: [...bookQueryKeys.lists(), ownerId, readStatus],
      queryFn: () => getBookListAPI({ ownerId, readStatus }),
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
  count: (request: GetBookCountByStatusAPIRequest) =>
    queryOptions({
      queryKey: [...bookQueryKeys.count()],
      queryFn: () => getBookCountByStatusAPI({ ...request }),
    }),
  point: () =>
    queryOptions({
      queryKey: [...bookQueryKeys.point()],
      queryFn: getMemberPointAPI,
    }),
};

const getBookListAPI = ({ ownerId, readStatus }: GetBookListAPIRequest) => {
  const searchParams = readStatus ? { readStatus } : undefined;

  return fetcher.get<GetBookListAPIResponse>(`v2/members/${ownerId}/books`, {
    searchParams,
  });
};

const getBookDetailAPI = ({ bookId }: GetBookDetailAPIRequest) =>
  fetcher.get<GetBookDetailAPIResponse>(`v2/books/${bookId}`);

const getBookSearchAPI = (bookName: string, pageParam: number) =>
  fetcher.get<SearchBookResponse>(`books?query=${bookName}&page=${pageParam}`);

const getMemberPointAPI = () => fetcher.get<MemberPoint>('members/point');

const getBookCountByStatusAPI = ({ ownerId, readStatus }: GetBookCountByStatusAPIRequest) => {
  const searchParams = readStatus ? { readStatus } : undefined;

  return fetcher.get<GetBookCountByStatusAPIResponse>(`v2/members/${ownerId}/books/count`, {
    searchParams,
  });
};
