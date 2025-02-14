'use client';

import { useState } from 'react';

import { Header } from '@repo/ui/components/Header';
import { Box, PageLayout } from '@repo/ui/components/Layout';
import { SearchBar } from '@repo/ui/components/SearchBar';
import { useModal } from '@repo/ui/hooks/useModal';
import { BackButton } from 'app/_components/BackButton';

import { BookCard } from './_components/BookCard';
import { BookStatusModal } from './_components/BookStatusModal';
import { SearchFallback } from './_components/SearchFallback';
import { MOCK_BOOK_LIST } from './_fixture/search';
import { Book } from './types/book';

const SearchPage = () => {
  const [search, setSearch] = useState<string>('');
  const [selectedBook, setSelectedBook] = useState<Book>({} as Book);
  const { isOpen, openModal, closeModal } = useModal();

  const isEmptyBooks = MOCK_BOOK_LIST.length === 0;

  // TODO : 검색 API 요청
  // const handleSearch = (search: string) => {};

  const handleOpenModal = (book: Book) => {
    setSelectedBook(book);
    openModal();
  };

  return (
    <PageLayout
      header={
        <Header left={<BackButton />} className="border-b border-gray-100">
          검색
        </Header>
      }
    >
      <Box className="mx-4">
        <Box className="mt-[15px]">
          <SearchBar
            value={search}
            placeholder="검색어를 입력하세요"
            onClick={() => {}}
            onClickReset={() => setSearch('')}
            onChange={(e) => setSearch(e.target.value)}
          />
        </Box>
        <Box className="mt-6">
          {isEmptyBooks ? (
            <SearchFallback />
          ) : (
            <>
              {MOCK_BOOK_LIST.map((book, index) => (
                <BookCard
                  key={index}
                  title={book.title}
                  authors={book.authors}
                  publishedAt={book.publishedAt}
                  thumbnail={book.thumbnail}
                  openModal={() => handleOpenModal(book)}
                />
              ))}
            </>
          )}
        </Box>
      </Box>
      <BookStatusModal isOpen={isOpen} closeModal={closeModal} bookData={selectedBook ?? {}} />
    </PageLayout>
  );
};

export default SearchPage;
