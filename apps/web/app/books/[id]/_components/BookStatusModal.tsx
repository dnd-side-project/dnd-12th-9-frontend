'use client';

import Image from 'next/image';

import { useState } from 'react';

import { Button } from '@repo/ui/components/Button';
import { Chip } from '@repo/ui/components/Chip';
import { CenterStack, Flex, JustifyBetween, VStack } from '@repo/ui/components/Layout';
import { Modal } from '@repo/ui/components/Modal';
import { Text } from '@repo/ui/components/Text';
import { useAddBook } from 'app/_api/mutations/useAddBook';
import { Book } from 'app/_api/types/book';
import { READING_STATUS, STATUS_DATA } from 'app/_constants/status';
import { entries } from 'app/_util/entries';

type ModalProps = {
  isOpen: boolean;
  closeModal: () => void;
};

type BookStatusModalProps = ModalProps & {
  data: Book;
  initialReadState?: READING_STATUS;
};

export const BookStatusModal = ({
  isOpen,
  closeModal,
  data,
  initialReadState = 'WANT_TO_READ',
}: BookStatusModalProps) => {
  const [activeStatus, setActiveStatus] = useState<READING_STATUS>(initialReadState);
  const mutation = useAddBook();

  const handleSave = () => {
    mutation.mutate({
      title: data.title,
      author: data.author,
      publishedAt: data.publishedAt,
      readStatus: activeStatus,
    });
    closeModal();
  };

  return (
    <Modal isOpen={isOpen} onClickOutside={closeModal}>
      <CenterStack className="gap-2">
        <Text type="Heading2" weight="semibold" className="text-gray-900">
          책을 어느정도 읽으셨나요?
        </Text>
        <Text type="Body1" className="mb-4 text-gray-600">
          {data.title}
        </Text>
        <Flex className="gap-4">
          {entries(STATUS_DATA).map(([status, data]) => (
            <Chip
              variant="graphic"
              key={status}
              active={activeStatus === data.readStatus}
              onClick={() => setActiveStatus(data.readStatus)}
            >
              <VStack className="gap-2">
                <Image src={data.image} alt="야옹" width={56} height={56} />
                <Text type="Title1" weight="medium">
                  {data.text}
                </Text>
              </VStack>
            </Chip>
          ))}
        </Flex>
        <JustifyBetween className="mt-6 w-full">
          <Button size="md" variant="gray100" onClick={closeModal}>
            닫기
          </Button>
          <Button size="md" variant="black" onClick={handleSave}>
            저장하기
          </Button>
        </JustifyBetween>
      </CenterStack>
    </Modal>
  );
};
