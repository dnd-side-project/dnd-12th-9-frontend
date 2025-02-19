import Image from 'next/image';

import { Button } from '@repo/ui/components/Button';
import { CenterStack, JustifyBetween } from '@repo/ui/components/Layout';
import { Modal } from '@repo/ui/components/Modal';
import { Text } from '@repo/ui/components/Text';
import { Item } from 'app/_api/types/draw';

type ItemModalProps = {
  itemData: Item;
  isOpen: boolean;
  onClose: () => void;
  onFetch: () => void;
  onNavigate?: () => void;
};
export const ItemModal = ({ itemData, isOpen, onFetch, onClose, onNavigate }: ItemModalProps) => {
  const ghostImage = `/Ghost/${itemData.code}.png`;
  return (
    <Modal
      isOpen={isOpen}
      onClickOutside={onClose}
      className="bg-gray-900/95"
      contentClassName="bg-gray-900/0 shadow-none"
    >
      <CenterStack className="gap-6">
        <Text type="Heading1" weight="semibold" className="text-white">
          뽑기 완료!
        </Text>
        <Image src={ghostImage} alt={ghostImage} width={200} height={200} />
        <CenterStack className="gap-1">
          <Text type="Heading3" weight="semibold" className="text-white">
            {itemData.name}
          </Text>
          {itemData.message && (
            <Text type="Body1" className="text-gray-500">
              {itemData.message}
            </Text>
          )}
        </CenterStack>

        <JustifyBetween className="mt-3 gap-2">
          <Button size="sm" variant="gray100" onClick={onFetch}>
            한번 더 뽑기
          </Button>
          <Button size="sm" variant="primary500" onClick={onNavigate}>
            책장 가기
          </Button>
        </JustifyBetween>
      </CenterStack>
    </Modal>
  );
};
