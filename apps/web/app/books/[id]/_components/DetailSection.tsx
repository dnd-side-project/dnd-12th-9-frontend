'use client';

import { useSuspenseQuery } from '@tanstack/react-query';

import { Spacing, Stack } from '@repo/ui/components/Layout';
import { Text } from '@repo/ui/components/Text';
import { bookQueryOptions } from 'app/_api/queries/book';

import { BookInfo } from './BookInfo';
import { ReadingCard } from './ReadingCard';

export const DetailSection = ({ id }: { id: string }) => {
  const {
    data: { data },
  } = useSuspenseQuery(bookQueryOptions.detail(id));

  return (
    <Stack className="p-4">
      <BookInfo {...data} />
      <Spacing className="h-8" />
      <Text weight="semibold" type="Heading1">
        내 독서
      </Text>
      <Spacing className="h-3" />
      <ReadingCard {...data} />
    </Stack>
  );
};
