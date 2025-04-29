'use client';

import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';

import { useState } from 'react';

import { Button } from '@sbooky/ui/components/Button';
import { Chip } from '@sbooky/ui/components/Chip';
import { CenterStack, Flex, JustifyBetween, VStack } from '@sbooky/ui/components/Layout';
import { Modal } from '@sbooky/ui/components/Modal';
import { Text } from '@sbooky/ui/components/Text';
import { useModal } from '@sbooky/ui/hooks/useModal';
import { Book } from 'app/_api/types/book';
import { RewardModal } from 'app/_components/RewardModal';
import { REWARD_MESSAGE } from 'app/_constants/reward';
import { DYNAMIC_ROUTES } from 'app/_constants/route';
import { READING_STATUS, STATUS_DATA } from 'app/_constants/status';
import { entries } from 'app/_util/entries';

type ModalProps = {
  isOpen: boolean;
  closeModal: () => void;
};

type BookStatusModalProps = ModalProps & {
  data: Book;
  initialReadState?: READING_STATUS;
  onConfirm: (readStatus: READING_STATUS) => void;
  memberId?: string;
};

export const BookStatusModal = ({
  isOpen,
  closeModal,
  data,
  onConfirm,
  initialReadState = 'WANT_TO_READ',
  memberId,
}: BookStatusModalProps) => {
  const router = useRouter();
  const path = usePathname().toString().split('/')[1];
  const hasSearch = path === 'search';

  const [activeStatus, setActiveStatus] = useState<READING_STATUS>(initialReadState);

  const { isOpen: isOrbModalOpen, openModal: openOrbModal, closeModal: closeOrbModal } = useModal();

  const handleSave = () => {
    onConfirm(activeStatus);
    closeModal();
    openOrbModal();
  };

  return (
    <>
      <Modal isOpen={isOpen} onClickOutside={closeModal}>
        <CenterStack className="gap-2">
          <Text type="Heading2" weight="semibold" className="text-gray-900">
            책을 어느정도 읽으셨나요?
          </Text>
          <Text type="Body1" className="mb-4 line-clamp-1 w-[240px] text-center text-gray-600">
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
      <RewardModal
        type={hasSearch ? 'double' : 'single'}
        message={hasSearch ? REWARD_MESSAGE.ADD : REWARD_MESSAGE.RATE}
        isOpen={isOrbModalOpen}
        onClose={closeOrbModal}
        onNavigate={memberId ? () => router.push(DYNAMIC_ROUTES.BOOK_SHELF(memberId)) : undefined}
      />
    </>
  );
};
