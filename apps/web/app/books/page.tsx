'use client';

import { useState } from 'react';

import { Chip } from '@repo/ui/components/Chip';
import { Header } from '@repo/ui/components/Header';
import { HStack, PageLayout, Stack } from '@repo/ui/components/Layout';
import { Text } from '@repo/ui/components/Text';
import { type ReadStatusTag, READ_STATUS_LIST } from 'app/_constants/status';

import { BackButton } from '../_components/BackButton';

import { CardList } from './_components/CardList';
import { MOCK_BOOK_LIST } from './_fixture/book';

const BookListPage = () => {
  const [readStatus, setReadStatus] = useState<ReadStatusTag>('ALL');

  const onClick = (value: ReadStatusTag) => () => {
    setReadStatus(value);
  };

  //TODO readStatus를 바탕으로 데이터 조회

  return (
    <PageLayout header={<Header left={<BackButton />}>책장</Header>}>
      <BookListHeader count={MOCK_BOOK_LIST.length} />
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
        <CardList cardList={[]} />
      </Stack>
    </PageLayout>
  );
};

const BookListHeader = ({ count }: { count: number }) => {
  return (
    <div className="gap-2 px-4 py-8">
      <Text type="Heading1" weight="semibold">
        {`책장에 총 ${count}권의 책이${'\n'} 담겨있어요`}
      </Text>
    </div>
  );
};

export default BookListPage;
