'use client';

import { Button } from '@repo/ui/components/Button';
import { useModal } from '@repo/ui/hooks/useModal';
import { Book } from 'app/_api/types/book';

import { BookStatusModal } from './BookStatusModal';

type DialogTriggerProps = {
  data: Book;
};
export const DialogTrigger = ({ data }: DialogTriggerProps) => {
  const { isOpen, openModal, closeModal } = useModal();

  return (
    <>
      <Button size="sm" variant="primary50" onClick={openModal}>
        변경하기
      </Button>
      {isOpen && <BookStatusModal isOpen={isOpen} closeModal={closeModal} data={data} />}
    </>
  );
};
