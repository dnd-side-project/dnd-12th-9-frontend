'use client';
import { JustifyBetween, Spacing, Stack } from '@sbooky/ui/components/Layout';
import { Text } from '@sbooky/ui/components/Text';
import { useModal } from '@sbooky/ui/hooks/useModal';

import { NickNameModal } from './NickNameModal';
import { SettingItem } from './SettingsItem';

export const SettingList = () => {
  const { isOpen, openModal, closeModal } = useModal();

  return (
    <>
      <Stack className="mt-7 px-4">
        <Stack className="mb-4 gap-2">
          <Text type="Title1" weight="semibold" className="py-2 text-gray-400">
            내 프로필
          </Text>
          <SettingItem name="닉네임 변경" onClick={openModal} />
          <JustifyBetween>
            <Text type="Body1" className="py-2 text-gray-900">
              내 책장 비공개
            </Text>
          </JustifyBetween>
        </Stack>
        <Spacing className="border-[0.5px]" />
        <Stack className="mt-4 gap-2">
          <Text type="Title1" weight="semibold" className="py-2 text-gray-400">
            계정 정보
          </Text>
          <SettingItem name="로그아웃" onClick={() => {}} />
          <SettingItem name="회원 탈퇴" onClick={() => {}} />
        </Stack>
      </Stack>
      <NickNameModal isOpen={isOpen} closeModal={closeModal} />
    </>
  );
};
