import Image from 'next/image';

import { useState } from 'react';

import { Button } from '@repo/ui/components/Button';
import { Chip } from '@repo/ui/components/Chip';
import { CenterStack, Flex, JustifyBetween, VStack } from '@repo/ui/components/Layout';
import { Modal } from '@repo/ui/components/Modal';
import { Text } from '@repo/ui/components/Text';
import { READING_STATUS, STATUS_DATA } from 'app/_constants/status';

import { Book } from '../_types/book';

type ModalProps = {
  isOpen: boolean;
  closeModal: () => void;
};

type BookStatusModalProps = ModalProps & {
  bookData: Book;
};

export const BookStatusModal = ({ isOpen, closeModal, bookData }: BookStatusModalProps) => {
  const [activeStatus, setActiveStatus] = useState<READING_STATUS | null>(null);

  return (
    <Modal isOpen={isOpen} onClickOutside={() => {}}>
      <CenterStack className="gap-2">
        <Text type="Heading2" weight="semibold" className="text-gray-900">
          책을 어느정도 읽으셨나요?
        </Text>
        <Text type="Body1" className="mb-4 text-gray-600">
          {bookData.title}
        </Text>
        <Flex className="gap-4">
          {Object.entries(STATUS_DATA).map(([status, data]) => (
            <Chip
              variant="graphic"
              key={status}
              active={activeStatus === status}
              onClick={() => setActiveStatus(status as READING_STATUS)}
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
          <Button size="md" variant="black">
            저장하기
          </Button>
        </JustifyBetween>
      </CenterStack>
    </Modal>
  );
};
