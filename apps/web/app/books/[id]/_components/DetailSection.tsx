'use client';

import { useRouter } from 'next/navigation';

import { useSuspenseQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';

import { Header, HeaderRightElement } from '@sbooky/ui/components/Header';
import { Icon } from '@sbooky/ui/components/Icon';
import { Spacing, Stack, PageLayout } from '@sbooky/ui/components/Layout';
import { Text } from '@sbooky/ui/components/Text';
import { useDeleteBook } from 'app/_api/mutations/useDeleteBook';
import { bookQueryOptions } from 'app/_api/queries/book';
import { BackButton } from 'app/_components/BackButton';
import { DYNAMIC_ROUTES } from 'app/_constants/route';

import { BookInfo } from './BookInfo';
import { ReadingCard } from './ReadingCard';

export const DetailSection = ({ id, memberId }: { id: string; memberId?: string }) => {
  const router = useRouter();

  const {
    data: { data },
  } = useSuspenseQuery(bookQueryOptions.detail(id));

  const { mutate } = useDeleteBook();

  const onClickTrashButton = (bookId: string) => () => {
    if (!memberId) {
      return;
    }

    mutate(
      { memberBookId: bookId },
      {
        onSuccess: () => {
          toast.success('책이 삭제되었습니다.');
          router.replace(DYNAMIC_ROUTES.BOOK_SHELF(memberId));
        },
        onError: () => {
          toast.error('책 삭제에 실패했습니다.');
        },
      }
    );
  };

  return (
    <PageLayout
      header={
        <Header
          left={<BackButton />}
          right={
            data.isOwner && (
              <HeaderRightElement onClick={onClickTrashButton(id)}>
                <Icon type="delete" color="gray800" />
              </HeaderRightElement>
            )
          }
          borderBottom
          className="bg-gray-70"
        >
          책 정보
        </Header>
      }
      className="bg-gray-70"
    >
      <Stack className="p-4">
        <BookInfo {...data} />
        <Spacing className="h-8" />
        <Text weight="semibold" type="Heading1">
          내 독서
        </Text>
        <Spacing className="h-3" />
        <ReadingCard {...data} memberId={memberId} />
      </Stack>
    </PageLayout>
  );
};
