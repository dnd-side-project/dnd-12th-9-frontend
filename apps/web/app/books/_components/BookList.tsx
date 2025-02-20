'use client';

import { useState } from 'react';

import { Chip } from '@repo/ui/components/Chip';
import { Stack, HStack } from '@repo/ui/components/Layout';
import { READ_STATUS_LIST, ReadStatusTag } from 'app/_constants/status';

import { CardList } from './CardList';

export const BookSection = () => {
  //TODO readStatus를 바탕으로 데이터 조회

  const [readStatus, setReadStatus] = useState<ReadStatusTag>('ALL');

  const onClick = (value: ReadStatusTag) => () => {
    setReadStatus(value);
  };

  return (
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
  );
};
