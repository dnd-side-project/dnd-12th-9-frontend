'use client';

import { Button } from '@repo/ui/components/Button';
import { useModal } from '@repo/ui/hooks/useModal';
import { useUpdateBook } from 'app/_api/mutations/useUpdateBook';
import { MemberBook } from 'app/_api/types/book';
import { READING_STATUS } from 'app/_constants/status';

import { BookStatusModal } from './BookStatusModal';

type DialogTriggerProps = {
  data: MemberBook;
};
export const DialogTrigger = ({ data }: DialogTriggerProps) => {
  const { isOpen, openModal, closeModal } = useModal();

  const { mutate } = useUpdateBook();

  const onConfirm = (readStatus: READING_STATUS) => {
    mutate({
      bookId: data.id,
      title: data.title,
      author: data.author,
      publishedAt: data.publishedAt,
      readStatus,
    });
  };

  return (
    <>
      <Button size="sm" variant="primary50" onClick={openModal}>
        변경하기
      </Button>
      {isOpen && (
        <BookStatusModal
          isOpen={isOpen}
          closeModal={closeModal}
          data={data}
          onConfirm={onConfirm}
        />
      )}
    </>
  );
};
