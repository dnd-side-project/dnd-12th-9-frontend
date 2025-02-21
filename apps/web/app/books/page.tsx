import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

import { HydrationBoundary, dehydrate } from '@tanstack/react-query';

import { bookQueryOptions } from 'app/_api/queries/book';
import { COOKIE_ID } from 'app/_constants/cookie';
import { ReadStatusTag } from 'app/_constants/status';
import { getQueryClient } from 'app/_util/queryClient';

import { BookSection } from './_components/BookList';
import { getFilterBySearchParams } from './_utils/getFilterBySearchParams';

type Props = {
  searchParams: Promise<{ [key: string]: ReadStatusTag | undefined }>;
};

const BookListPage = async ({ searchParams }: Props) => {
  const cookieStore = await cookies();
  const memberId = cookieStore.get(COOKIE_ID.MEMBER_ID)?.value;

  const filter = (await searchParams).filter;

  if (!memberId) {
    redirect('/login');
  }

  const queryClient = getQueryClient();

  await queryClient.prefetchQuery(bookQueryOptions.list(memberId, getFilterBySearchParams(filter)));

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <BookSection memberId={memberId} filter={filter ?? 'ALL'} />
    </HydrationBoundary>
  );
};

export default BookListPage;
