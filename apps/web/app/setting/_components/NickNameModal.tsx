import { ChangeEventHandler, useState } from 'react';

import { Button } from '@sbooky/ui/components/Button';
import { CenterStack, JustifyBetween } from '@sbooky/ui/components/Layout';
import { Modal } from '@sbooky/ui/components/Modal';
import { Text } from '@sbooky/ui/components/Text';
import { TextField } from '@sbooky/ui/components/TextField';

type NickNameModalProps = {
  isOpen: boolean;
  closeModal: VoidFunction;
};

export const NickNameModal = ({ isOpen, closeModal }: NickNameModalProps) => {
  const [nickname, setNickname] = useState<string>('');
  const handleReset = () => {
    setNickname('');
  };

  const onChange: ChangeEventHandler<HTMLInputElement> = ({ target: { value } }) => {
    setNickname(value);
  };
  return (
    <>
      <Modal isOpen={isOpen} onClickOutside={closeModal}>
        <CenterStack className="gap-3">
          <Text type="Heading2" weight="semibold" className="text-gray-900">
            닉네임 변경
          </Text>

          <TextField
            value={nickname}
            onChange={onChange}
            onClickReset={handleReset}
            minLength={1}
            maxLength={10}
          />
        </CenterStack>

        <JustifyBetween className="mt-6 w-full">
          <Button size="md" variant="gray100" onClick={closeModal}>
            닫기
          </Button>
          <Button size="md" variant="black">
            저장하기
          </Button>
        </JustifyBetween>
      </Modal>
    </>
  );
};
