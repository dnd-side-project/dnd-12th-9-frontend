'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

import { Box, Flex } from '@repo/ui/components/Layout';
import { SearchBar } from '@repo/ui/components/SearchBar';

import useSearchBook from '../../_api/queries/useSearchBook';

import { BookList } from './BookList';

const OBSERVER_OPTIONS = {
  root: null,
  rootMargin: '100px',
  threshold: 0.1,
};

export const SearchContent = () => {
  const observerTarget = useRef<HTMLDivElement>(null);
  const [search, setSearch] = useState<string>('');

  const { data, hasNextPage, isFetchingNextPage, isLoading, fetchNextPage } = useSearchBook(search);

  const books = data?.pages.flatMap((page) => page.data.books) ?? [];

  const handleObserver = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && hasNextPage && !isFetchingNextPage) {
          fetchNextPage();
        }
      });
    },
    [fetchNextPage, hasNextPage, isFetchingNextPage]
  );

  useEffect(() => {
    const observer = new IntersectionObserver(handleObserver, OBSERVER_OPTIONS);

    if (observerTarget.current) {
      observer.observe(observerTarget.current);
    }
    return () => observer.disconnect();
  }, [handleObserver]);

  return (
    <Flex className="h-dvh flex-col">
      <Box className="mx-4 mt-[15px]">
        <SearchBar
          value={search}
          placeholder="검색어를 입력하세요"
          onClick={() => {}}
          onClickReset={() => setSearch('')}
          onChange={(e) => setSearch(e.target.value)}
        />
      </Box>
      <Box className="mt-6 flex-1 overflow-y-auto">
        <BookList data={books} isLoading={isLoading} />
        <Box ref={observerTarget} className="h-14" />
      </Box>
    </Flex>
  );
};
