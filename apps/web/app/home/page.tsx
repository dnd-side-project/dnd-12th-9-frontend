import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';

import { bookQueryOptions } from 'app/_api/queries/book';
import { itemQueryOptions } from 'app/_api/queries/item';
import { COOKIE_ID } from 'app/_constants/cookie';
import { ROUTES } from 'app/_constants/route';

import { Home } from './_components/Home';

const HomePage = async () => {
  const queryClient = new QueryClient();

  const cookieStore = await cookies();
  const memberId = cookieStore.get(COOKIE_ID.MEMBER_ID)?.value;
  const nickname = cookieStore.get(COOKIE_ID.NICKNAME)?.value;

  if (!memberId) {
    redirect(ROUTES.LOGIN);
  }

  if (!nickname) {
    redirect(ROUTES.NICKNAME);
  }

  await Promise.all([
    queryClient.prefetchQuery(bookQueryOptions.count(memberId)),
    queryClient.prefetchQuery(bookQueryOptions.point()),
    queryClient.prefetchQuery(itemQueryOptions.equipped()),
  ]);

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Home memberId={memberId} />
    </HydrationBoundary>
  );
};

export default HomePage;
