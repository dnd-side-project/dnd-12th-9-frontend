'use client';

import { useState } from 'react';

import { Chip } from '@repo/ui/components/Chip';
import { Header } from '@repo/ui/components/Header';
import { HStack, PageLayout, Stack } from '@repo/ui/components/Layout';
import { Text } from '@repo/ui/components/Text';

import { BackButton } from '../_components/BackButton';

import { CardList } from './_components/CardList';
import { MOCK_BOOK_LIST } from './_fixture/book';

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

  //TODO readStatus를 바탕으로 데이터 조회

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
        <CardList cardList={MOCK_BOOK_LIST} />
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
