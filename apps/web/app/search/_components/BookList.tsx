import { useState } from 'react';

import { Box } from '@repo/ui/components/Layout';
import { useModal } from '@repo/ui/hooks/useModal';
import { BookStatusModal } from 'app/books/[id]/_components/BookStatusModal';

import { Book } from '../_types/book';

import { BookCard } from './BookCard';
import { SearchFallback } from './SearchFallback';

type BookListProps = {
  data: Book[];
};
export const BookList = ({ data }: BookListProps) => {
  const [selectedBook, setSelectedBook] = useState<Book>({} as Book);
  const { isOpen, openModal, closeModal } = useModal();
  const isEmptyBooks = data.length === 0;

  const handleOpenModal = (book: Book) => {
    setSelectedBook(book);
    openModal();
  };

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
      <BookStatusModal isOpen={isOpen} closeModal={closeModal} data={selectedBook} />
    </Box>
  );
};
