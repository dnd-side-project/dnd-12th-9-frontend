'use client';

import { Button } from '@repo/ui/components/Button';
import { useModal } from '@repo/ui/hooks/useModal';

import { BookStatusModal } from './BookStatusModal';

export const DialogTrigger = () => {
  const { isOpen, openModal, closeModal } = useModal();

  return (
    <>
      <Button size="sm" variant="primary50" onClick={openModal}>
        변경하기
      </Button>
      {isOpen && <BookStatusModal isOpen={isOpen} closeModal={closeModal} title="인간실격" />}
    </>
  );
};
