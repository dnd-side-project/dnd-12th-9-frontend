import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

import { HydrationBoundary, dehydrate, QueryClient } from '@tanstack/react-query';

import { itemQueryOptions } from 'app/_api/queries/item';
import { COOKIE_ID } from 'app/_constants/cookie';
import { ROUTES } from 'app/_constants/route';

import { ClosetSection } from './_components/ClosetSecion';

const queryClient = new QueryClient();

const ClosetPage = async () => {
  const cookieStore = await cookies();
  const memberId = cookieStore.get(COOKIE_ID.MEMBER_ID)?.value;

  if (!memberId) {
    redirect(ROUTES.LOGIN);
  }

  await Promise.all([
    queryClient.prefetchQuery(itemQueryOptions.list(memberId)),
    queryClient.prefetchQuery(itemQueryOptions.equipped(memberId)),
  ]);

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ClosetSection memberId={memberId} />
    </HydrationBoundary>
  );
};

export default ClosetPage;
