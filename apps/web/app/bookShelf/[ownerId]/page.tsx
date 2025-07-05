import { HydrationBoundary, dehydrate } from '@tanstack/react-query';

import { bookQueryOptions } from 'app/_api/queries/book';
import { ReadStatusTag } from 'app/_constants/status';
import { getQueryClient } from 'app/_util/queryClient';

import { BookSection } from './_components/BookList';
import { getFilterBySearchParams } from './_utils/getFilterBySearchParams';

type Props = {
  searchParams: Promise<{ [key: string]: ReadStatusTag | undefined }>;
  params: Promise<{ ownerId: string }>;
};

const BookListPage = async ({ searchParams, params }: Props) => {
  const { ownerId } = await params;

  const filter = (await searchParams).filter;

  const queryClient = getQueryClient();

  queryClient.prefetchQuery(bookQueryOptions.list(ownerId, getFilterBySearchParams(filter)));
  queryClient.prefetchQuery(bookQueryOptions.count({ ownerId }));

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <BookSection memberId={ownerId} filter={filter ?? 'ALL'} />
    </HydrationBoundary>
  );
};

export default BookListPage;
