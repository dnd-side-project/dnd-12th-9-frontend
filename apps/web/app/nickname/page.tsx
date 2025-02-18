'use client';

import { ChangeEventHandler, useCallback, useState } from 'react';

import { Button } from '@repo/ui/components/Button';
import { Header } from '@repo/ui/components/Header';
import { Box, JustifyBetween, PageLayout, Stack } from '@repo/ui/components/Layout';
import { Text } from '@repo/ui/components/Text';
import { TextField } from '@repo/ui/components/TextField';

const INITIAL_NICKNAME = '';

const NicknamePage = () => {
  const [nickname, setNickname] = useState(INITIAL_NICKNAME);

  const onChange: ChangeEventHandler<HTMLInputElement> = ({ target: { value } }) => {
    setNickname(value);
  };

  const onReset = () => setNickname(INITIAL_NICKNAME);

  const disabled = nickname.length === 0;

  const ref = useCallback((node: HTMLInputElement | null) => {
    node?.focus();
  }, []);

  return (
    <PageLayout header={<Header>닉네임 설정</Header>} className="flex flex-col">
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
          <Button size="lg" className="w-full" disabled={disabled}>
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
