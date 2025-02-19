'use client';
import { fetcher } from './fetcher';
import { SearchBookResponse } from './types/book';

export const book = {
  search: (bookName: string) => ({
    queryKey: ['searchBook', bookName],
    queryFn: ({ pageParam = 1 }) =>
      fetcher.get<SearchBookResponse>(
        `books?query=${encodeURIComponent(bookName)}&sort=accuracy&size=10&target=target&page=${pageParam}`
      ),
    getNextPageParam: (lastPage: SearchBookResponse) =>
      !lastPage.pageInfo.inEnd ? lastPage.pageInfo.page + 1 : undefined,
    initialPageParam: 1,
  }),
};
