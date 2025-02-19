'use client';

import { useState } from 'react';

import { Box } from '@repo/ui/components/Layout';
import { SearchBar } from '@repo/ui/components/SearchBar';
import { useModal } from '@repo/ui/hooks/useModal';
import { BookStatusModal } from 'app/books/[id]/_components/BookStatusModal';

import useSearchBook from '../../_api/queries/useSearchBook';
import { Book } from '../_types/book';

import { BookCard } from './BookCard';
import { SearchFallback } from './SearchFallback';

export const SearchContent = () => {
  const [search, setSearch] = useState<string>('');
  const [selectedBook, setSelectedBook] = useState<Book>({} as Book);
  const { isOpen, openModal, closeModal } = useModal();
  const { data, refetch } = useSearchBook(search, {
    enabled: false,
  });

  const books = data?.pages.flatMap((page) => page.data.books) ?? [];
  const isEmptyBooks = books.length === 0;

  const handleSearch = () => {
    if (!search.trim()) return;
    refetch();
  };

  const handleOpenModal = (book: Book) => {
    setSelectedBook(book);
    openModal();
  };

  return (
    <Box className="mx-4">
      <Box className="mt-[15px]">
        <SearchBar
          value={search}
          placeholder="검색어를 입력하세요"
          onClick={() => handleSearch()}
          onClickReset={() => setSearch('')}
          onChange={(e) => setSearch(e.target.value)}
        />
      </Box>
      <Box className="mt-6">
        {isEmptyBooks ? (
          <SearchFallback />
        ) : (
          <>
            {books.map((book, index) => (
              <BookCard
                key={`${book.title} - ${index}`}
                title={book.title}
                author={book.author}
                publishedAt={book.publishedAt}
                thumbnail={book.thumbnail}
                openModal={() => handleOpenModal(book)}
              />
            ))}
          </>
        )}
      </Box>
      <BookStatusModal isOpen={isOpen} closeModal={closeModal} title={selectedBook.title} />
    </Box>
  );
};
