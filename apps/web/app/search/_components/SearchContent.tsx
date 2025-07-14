'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

import { useInfiniteQuery } from '@tanstack/react-query';

import { Box, Flex } from '@sbooky/ui/components/Layout';
import { SearchBar } from '@sbooky/ui/components/SearchBar';
import { bookQueryOptions } from 'app/_api/queries/book';

import { BookList } from './BookList';

const OBSERVER_OPTIONS = {
  root: null,
  rootMargin: '100px',
  threshold: 0.1,
};

type SearchContentProps = {
  memberId: string;
};

export const SearchContent = ({ memberId }: SearchContentProps) => {
  const observerTarget = useRef<HTMLDivElement>(null);
  const [search, setSearch] = useState<string>('');
  const [query, setQuery] = useState<string>('');

  const { data, hasNextPage, isFetchingNextPage, isLoading, fetchNextPage } = useInfiniteQuery(
    bookQueryOptions.search(query)
  );

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
  }, [handleObserver, query]);

  const handleSearch = (value?: string) => {
    setQuery(value ?? search);
  };

  // https://tkdodo.eu/blog/avoiding-use-effect-with-callback-refs#usecallback-to-the-rescue
  const ref = useCallback((node: HTMLInputElement | null) => {
    node?.focus();
  }, []);

  return (
    <Flex className="h-dvh flex-col">
      <Box className="mx-4 mt-[15px]">
        <SearchBar
          value={search}
          placeholder="검색어를 입력하세요"
          onClick={() => handleSearch()}
          onClickReset={() => setSearch('')}
          onChange={(e) => setSearch(e.target.value)}
          ref={ref}
        />
      </Box>
      <Box className="mt-6 flex-1 overflow-y-auto">
        {query && <BookList data={books} isLoading={isLoading} memberId={memberId} />}
        <Box ref={observerTarget} className="h-14" />
      </Box>
    </Flex>
  );
};
