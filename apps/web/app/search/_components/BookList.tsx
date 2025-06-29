'use client';

import { useState } from 'react';

import { toast } from 'react-hot-toast';

import { Box, CenterStack } from '@sbooky/ui/components/Layout';
import { useModal } from '@sbooky/ui/hooks/useModal';
import { useAddBook } from 'app/_api/mutations/useAddBook';
import { Book } from 'app/_api/types/book';
import Loading from 'app/_components/Loading';
import { READING_STATUS } from 'app/_constants/status';
import { BookStatusModal } from 'app/books/[id]/_components/BookStatusModal';

import { BookCard } from './BookCard';
import { SearchFallback } from './SearchFallback';

type BookListProps = {
  data: Book[];
  isLoading: boolean;
  memberId: string;
};

export const BookList = ({ data, isLoading, memberId }: BookListProps) => {
  const [selectedBook, setSelectedBook] = useState<Book>({} as Book);
  const { isOpen, openModal, closeModal } = useModal();
  const isEmptyBooks = data.length === 0;

  const { mutate, isPending } = useAddBook();

  const onConfirm = (readStatus: READING_STATUS) =>
    mutate(
      {
        title: selectedBook.title,
        author: selectedBook.author,
        publishedAt: selectedBook.publishedAt,
        thumbnailUrl: selectedBook.thumbnail ?? '',
        readStatus,
      },
      {
        onSuccess: () => toast.success(`책 등록에 성공했어요`),
        onError: () => toast.error(`책 등록에 실패했어요`),
      }
    );

  const handleOpenModal = (book: Book) => {
    setSelectedBook(book);
    openModal();
  };

  if (isLoading) {
    return (
      <CenterStack className="h-dvh">
        <Loading />
      </CenterStack>
    );
  }

  return (
    <Box className="mx-4 pb-6">
      {isEmptyBooks ? (
        <SearchFallback />
      ) : (
        <>
          {data.map((book, index) => (
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
      <BookStatusModal
        isOpen={isOpen}
        closeModal={closeModal}
        data={selectedBook}
        onConfirm={onConfirm}
        memberId={memberId}
        isPending={isPending}
      />
    </Box>
  );
};
