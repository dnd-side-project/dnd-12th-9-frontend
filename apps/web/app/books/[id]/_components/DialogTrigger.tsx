'use client';

import { toast } from 'react-hot-toast';

import { Button } from '@sbooky/ui/components/Button';
import { useModal } from '@sbooky/ui/hooks/useModal';
import { useUpdateBook } from 'app/_api/mutations/useUpdateBook';
import { MemberBook } from 'app/_api/types/book';
import { READING_STATUS } from 'app/_constants/status';

import { BookStatusModal } from './BookStatusModal';

type DialogTriggerProps = {
  data: MemberBook;
  memberId?: string;
};
export const DialogTrigger = ({ data, memberId }: DialogTriggerProps) => {
  const { isOpen, openModal, closeModal } = useModal();

  const { mutate } = useUpdateBook();

  const onConfirm = (readStatus: READING_STATUS) => {
    mutate(
      {
        bookId: data.id,
        title: data.title,
        author: data.author,
        publishedAt: data.publishedAt,
        readStatus,
      },
      {
        onSuccess: () => toast.success('독서 상태 변경에 성공했어요!'),
        onError: () => toast.error('독서 상태 변경에 실패했어요'),
      }
    );
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
          initialReadState={data.readStatus}
          memberId={memberId}
        />
      )}
    </>
  );
};
