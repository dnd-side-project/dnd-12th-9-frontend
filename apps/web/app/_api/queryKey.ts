'use client';

import { fetcher } from './fetcher';
import { SearchBookResponse } from './types/book';
import { MemberPoint } from './types/member';

export const book = {
  search: (bookName: string) => ({
    queryKey: ['searchBook', bookName],
    queryFn: ({ pageParam = 1 }) =>
      fetcher.get<SearchBookResponse>(`books?query=${bookName}&page=${pageParam}`),
    getNextPageParam: (lastPage: SearchBookResponse) => {
      return lastPage.data.pageInfo?.isEnd === false ? lastPage.data.pageInfo?.page + 1 : undefined;
    },
    initialPageParam: 1,
  }),
};

export const member = {
  point: () => ({
    queryKey: ['memberPoint'],
    queryFn: () => fetcher.get<MemberPoint>('members/point'),
  }),
};
