import { infiniteQueryOptions } from '@tanstack/react-query';

import { fetcher } from '../fetcher';
import { SearchBookResponse } from '../types/book';

export const bookQueryKeys = {
  all: () => ['books'],
  add: () => [...bookQueryKeys.all(), 'add'],
  search: () => [...bookQueryKeys.all(), 'search'],
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
};

const getBookSearchAPI = (bookName: string, pageParam: number) =>
  fetcher.get<SearchBookResponse>(`books?query=${bookName}&page=${pageParam}`);
