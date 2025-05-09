import { cookies } from 'next/headers';

import { dehydrate, HydrationBoundary } from '@tanstack/react-query';

import { bookQueryOptions } from 'app/_api/queries/book';
import { COOKIE_ID } from 'app/_constants/cookie';
import { getQueryClient } from 'app/_util/queryClient';

import { DetailSection } from './_components/DetailSection';

type BookDetailPageProps = {
  params: Promise<{ id: string }>;
};

const BookDetailPage = async ({ params }: BookDetailPageProps) => {
  const param = await params;
  const cookieStore = await cookies();
  const memberId = cookieStore.get(COOKIE_ID.MEMBER_ID)?.value;

  const queryClient = getQueryClient();

  await queryClient.prefetchQuery(bookQueryOptions.detail(param.id));

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <DetailSection id={param.id} memberId={memberId} />
    </HydrationBoundary>
  );
};

export default BookDetailPage;
