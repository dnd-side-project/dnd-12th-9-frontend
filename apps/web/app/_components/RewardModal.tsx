import Image from 'next/image';

import { Button } from '@repo/ui/components/Button';
import { Icon } from '@repo/ui/components/Icon';
import { CenterStack, JustifyBetween } from '@repo/ui/components/Layout';
import { Modal } from '@repo/ui/components/Modal';
import { Text } from '@repo/ui/components/Text';

type RewardModalProps = {
  type: 'single' | 'double';
  message: string;
  isOpen: boolean;
  onClose: () => void;
  onNavigate?: () => void;
};
export const RewardModal = ({
  type = 'single',
  message = '책을 평가했어요!',
  isOpen,
  onClose,
  onNavigate,
}: RewardModalProps) => {
  return (
    <Modal
      isOpen={isOpen}
      onClickOutside={onClose}
      className="bg-gray-900/95"
      contentClassName="bg-gray-900/0 shadow-none"
    >
      <CenterStack className="gap-6">
        <Text type="Heading1" weight="semibold" className="text-green-600">
          구슬 얻기 성공!
        </Text>
        <CenterStack className="relative">
          <Image src="/EFFECT_GREEN.png" alt="효과" width={300} height={300} className="z-0" />
          <Icon type="orb" size={150} className="absolute z-10" />
        </CenterStack>
        <CenterStack className="gap-1">
          <Text type="Heading3" weight="semibold" className="text-white">
            {message}
          </Text>
          <Text type="Body1" className="text-white">
            {` 구슬 ${type === 'single' ? '50개' : '10개'}`}
          </Text>
        </CenterStack>
        {type === 'double' ? (
          <JustifyBetween className="mt-3 gap-2">
            <Button size="md" variant="gray100" onClick={onClose}>
              확인
            </Button>
            <Button size="md" variant="primary500" onClick={onNavigate}>
              책장 가기
            </Button>
          </JustifyBetween>
        ) : (
          <Button size="sm" variant="primary500" onClick={onClose} className="mt-3">
            확인
          </Button>
        )}
      </CenterStack>
    </Modal>
  );
};
