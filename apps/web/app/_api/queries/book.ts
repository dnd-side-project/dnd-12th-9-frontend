import { infiniteQueryOptions, queryOptions } from '@tanstack/react-query';

import { fetcher } from '../fetcher';
import { SearchBookResponse } from '../types/book';
import { GetMemberCompletedBookCountAPIResponse } from '../types/member';

export const bookQueryKeys = {
  all: () => ['books'],
  add: () => [...bookQueryKeys.all(), 'add'],
  search: () => [...bookQueryKeys.all(), 'search'],
  count: () => [...bookQueryKeys.all(), 'count'],
};

export const bookQueryOptions = {
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

const getBookSearchAPI = (bookName: string, pageParam: number) =>
  fetcher.get<SearchBookResponse>(`books?query=${bookName}&page=${pageParam}`);

const getMemberCompletedBookAPI = (memberId: string) =>
  fetcher.get<GetMemberCompletedBookCountAPIResponse>(`completed-books/members/${memberId}/count`);
