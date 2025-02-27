import { useRouter } from 'next/navigation';

import { useState } from 'react';

import { Button } from '@repo/ui/components/Button';
import { CenterStack, JustifyBetween } from '@repo/ui/components/Layout';
import { Modal } from '@repo/ui/components/Modal';
import { Text } from '@repo/ui/components/Text';
import { ROUTES } from 'app/_constants/route';

type OnboardingCompleteModalProps = {
  isOnBoardingModalOpen: boolean;
};
export const OnBoardingCompleteModal = ({
  isOnBoardingModalOpen,
}: OnboardingCompleteModalProps) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState<boolean>(isOnBoardingModalOpen);

  const handleModalClose = () => {
    setIsOpen(false);
  };

  return (
    <Modal isOpen={isOpen} onClickOutside={handleModalClose}>
      <CenterStack className="gap-2">
        <Text type="Heading1" weight="semibold" className="text-gray-800">
          튜토리얼 완료!
        </Text>
        <Text type="Body1" className="text-center text-gray-600">
          {`모든 준비가 끝났어요.\n 이제 스부키와 함께 독서를 즐겨보세요.`}
        </Text>

        <JustifyBetween className="mt-4 gap-2">
          <Button size="md" variant="gray100" onClick={handleModalClose}>
            닫기
          </Button>
          <Button
            size="md"
            variant="black"
            onClick={() => {
              handleModalClose();
              router.push(ROUTES.SEARCH);
            }}
          >
            책 등록하기
          </Button>
        </JustifyBetween>
      </CenterStack>
    </Modal>
  );
};
