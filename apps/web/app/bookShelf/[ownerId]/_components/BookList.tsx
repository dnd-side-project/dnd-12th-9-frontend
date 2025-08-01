'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { useSuspenseQueries } from '@tanstack/react-query';

import { Chip } from '@sbooky/ui/components/Chip';
import { Header, HeaderLeftElement } from '@sbooky/ui/components/Header';
import { Icon } from '@sbooky/ui/components/Icon';
import { Stack, HStack, PageLayout } from '@sbooky/ui/components/Layout';
import { Text } from '@sbooky/ui/components/Text';
import { bookQueryOptions } from 'app/_api/queries/book';
import { DYNAMIC_ROUTES } from 'app/_constants/route';
import { READ_STATUS_LIST, ReadStatusTag } from 'app/_constants/status';

import { getFilterBySearchParams } from '../_utils/getFilterBySearchParams';

import { CardList } from './CardList';

type Props = {
  memberId: string;
  filter: ReadStatusTag;
};

export const BookSection = ({ memberId, filter }: Props) => {
  const router = useRouter();
  const [
    {
      data: {
        data: { bookList, isOwner },
      },
    },
    {
      data: {
        data: { bookCount: totalBookCount },
      },
    },
  ] = useSuspenseQueries({
    queries: [
      bookQueryOptions.list(memberId, getFilterBySearchParams(filter)),
      bookQueryOptions.count({ ownerId: memberId }),
    ],
  });

  const goBack = () => {
    router.push(DYNAMIC_ROUTES.USER(memberId));
  };

  return (
    <PageLayout
      header={
        <Header
          left={
            <HeaderLeftElement onClick={goBack}>
              <Icon type="back" color="gray800" />
            </HeaderLeftElement>
          }
          className="bg-white"
          borderBottom
        >
          책장
        </Header>
      }
      className="bg-white"
    >
      <BookListHeader count={totalBookCount} />

      <Stack className="px-4">
        <HStack className="gap-1.5">
          {READ_STATUS_LIST.map(({ value, text }) => (
            <Link key={value} href={`?filter=${value}`}>
              <Chip variant="rounded" active={filter === value}>
                {text}
              </Chip>
            </Link>
          ))}
        </HStack>
        <CardList bookList={bookList} isOwner={isOwner} />
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
