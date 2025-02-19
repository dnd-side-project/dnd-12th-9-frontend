'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

import { Box, Flex, Spacing } from '@repo/ui/components/Layout';
import { SearchBar } from '@repo/ui/components/SearchBar';

import useSearchBook from '../../_api/queries/useSearchBook';

import { BookList } from './BookList';

const OBSERVER_OPTIONS = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1,
};

export const SearchContent = () => {
  const observerTarget = useRef<HTMLDivElement>(null);
  const [search, setSearch] = useState<string>('');

  const { data, hasNextPage, isFetchingNextPage, fetchNextPage, refetch } = useSearchBook(search);

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

  const handleSearch = () => {
    if (!search.trim()) return;
    refetch();
  };

  return (
    <Flex className="h-dvh flex-col">
      <Box className="mx-4 mt-[15px]">
        <SearchBar
          value={search}
          placeholder="검색어를 입력하세요"
          onClick={() => handleSearch()}
          onClickReset={() => setSearch('')}
          onChange={(e) => setSearch(e.target.value)}
        />
      </Box>
      <Box className="mt-6 flex-1 overflow-y-auto">
        {search && <BookList data={books} />}
        <Spacing
          ref={observerTarget}
          className="flex h-20 items-center justify-center bg-gray-100/10"
        />
      </Box>
    </Flex>
  );
};
