'use client';

import { useRouter } from 'next/navigation';

import { ChangeEventHandler, useCallback, useState } from 'react';

import { toast } from 'sonner';

import { Button } from '@sbooky/ui/components/Button';
import { Header } from '@sbooky/ui/components/Header';
import { Box, JustifyBetween, PageLayout, Stack } from '@sbooky/ui/components/Layout';
import { Text } from '@sbooky/ui/components/Text';
import { TextField } from '@sbooky/ui/components/TextField';
import { useNickname } from 'app/_api/mutations/useNickname';
import { ROUTES } from 'app/_constants/route';

const INITIAL_NICKNAME = '';

const NicknamePage = () => {
  const router = useRouter();

  const { mutate, isPending } = useNickname();

  const onClickSaveButton = () => {
    mutate(
      { nickname },
      {
        onSuccess: () => toast.success(`닉네임 설정에 성공했어요`),
        onError: () => toast.error(`닉네임 설정에 실패했어요`),
      }
    );
    router.push(ROUTES.ONBOARDING);
  };

  const [nickname, setNickname] = useState(INITIAL_NICKNAME);

  const onChange: ChangeEventHandler<HTMLInputElement> = ({ target: { value } }) => {
    setNickname(value);
  };

  const onReset = () => setNickname(INITIAL_NICKNAME);

  const disabled = nickname.length === 0 || isPending;

  const ref = useCallback((node: HTMLInputElement | null) => {
    node?.focus();
  }, []);

  return (
    <PageLayout
      header={<Header className="bg-white">닉네임 설정</Header>}
      className="flex flex-col bg-white"
    >
      <Stack className="grow">
        <NicknameHeader />
        <JustifyBetween className="grow flex-col items-center px-4 pb-4">
          <TextField
            value={nickname}
            onChange={onChange}
            onClickReset={onReset}
            placeholder="닉네임을 입력해주세요"
            ref={ref}
          />
          <Button size="lg" className="w-full" disabled={disabled} onClick={onClickSaveButton}>
            저장하기
          </Button>
        </JustifyBetween>
      </Stack>
    </PageLayout>
  );
};

const NicknameHeader = () => {
  return (
    <Box className="px-4 py-8">
      <Text
        type="Heading1"
        className="text-gray-900"
      >{`스부키와 함께할${'\n'}유령의 이름을 지어주세요`}</Text>
    </Box>
  );
};

export default NicknamePage;
