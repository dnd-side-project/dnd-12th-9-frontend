import { Button } from '@sbooky/ui/components/Button';
import { CenterStack, JustifyBetween, Stack } from '@sbooky/ui/components/Layout';
import { Modal } from '@sbooky/ui/components/Modal';
import { Text } from '@sbooky/ui/components/Text';

type LoginAlertModalProps = {
  isOpen: boolean;
  closeModal: VoidFunction;
};

export const LoginAlertModal = ({ isOpen, closeModal }: LoginAlertModalProps) => {
  return (
    <Modal isOpen={isOpen} onClickOutside={closeModal}>
      <Stack className="gap-6">
        <CenterStack className="gap-2">
          <Text type="Heading2" className="text-gray-800">
            로그인이 필요한 기능이에요
          </Text>
          <Text type="Body1" className="text-gray-600">
            로그인 후 이용할 수 있어요. 로그인 페이지로 이동할까요?
          </Text>
        </CenterStack>
        <JustifyBetween className="w-full">
          <Button variant="gray100" size="md">
            닫기
          </Button>
          <Button variant="black" size="md">
            로그인하기
          </Button>
        </JustifyBetween>
      </Stack>
    </Modal>
  );
};
