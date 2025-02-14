'use client';

import Image from 'next/image';

import { useState } from 'react';

import { Button } from '@repo/ui/components/Button';
import { Chip } from '@repo/ui/components/Chip';
import { Header } from '@repo/ui/components/Header';
import {
  Center,
  CenterStack,
  HStack,
  PageLayout,
  Spacing,
  Stack,
} from '@repo/ui/components/Layout';
import { Text } from '@repo/ui/components/Text';

import EMPTY_STATE from '../../../../public/assets/EMPTY_STATE.png';
import { BackButton } from '../_components/BackButton';

type ReadStatus = 'ALL' | 'WANT_TO_READ' | 'READING' | 'COMPLETED';

const READ_STATUS_LIST = [
  { value: 'ALL', text: '전체' },
  { value: 'WANT_TO_READ', text: '읽기 전' },
  { value: 'READING', text: '읽는 중' },
  { value: 'COMPLETED', text: '완독' },
] as const;

const BookListPage = () => {
  const [readStatus, setReadStatus] = useState<ReadStatus>('ALL');

  const onClick = (value: ReadStatus) => () => {
    setReadStatus(value);
  };

  return (
    <PageLayout header={<Header left={<BackButton />}>책장</Header>}>
      <BookListHeader />
      <Stack className="px-4">
        <HStack className="gap-1.5">
          {READ_STATUS_LIST.map(({ value, text }) => (
            <Chip
              variant="rounded"
              active={readStatus === value}
              key={value}
              onClick={onClick(value)}
            >
              {text}
            </Chip>
          ))}
        </HStack>
        <Spacing className="h-20" />
        <CenterStack className="grow">
          <Image src={EMPTY_STATE} alt="비어있는 책장" width={120} height={120} />
          <Spacing className="h-4" />
          <Text className="text-gray-900" weight="semibold" type="Title1">
            책장이 비어 있어요...
          </Text>
          <Spacing className="h-2" />
          <Text className="text-gray-500" weight="medium" type="Body2">
            책을 검색하고 내 책장에 추가해보세요.
          </Text>
          <Spacing className="h-5" />
          <Center className="py-1">
            <Button variant="primary50" size="sm">
              등록하기
            </Button>
          </Center>
        </CenterStack>
      </Stack>
    </PageLayout>
  );
};

const BookListHeader = () => {
  return (
    <div className="gap-2 px-4 py-8">
      <Text type="Heading1" weight="semibold">
        {`책장에 총 0권의 책이${'\n'} 담겨있어요`}
      </Text>
    </div>
  );
};

export default BookListPage;
