import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';

import { bookQueryOptions } from 'app/_api/queries/book';
import { itemQueryOptions } from 'app/_api/queries/item';
import { memberQueryOptions } from 'app/_api/queries/member';
import { COOKIE_ID } from 'app/_constants/cookie';

import { Home } from './_components/Home';

const HomePage = async () => {
  const queryClient = new QueryClient();

  const cookieStore = await cookies();
  const memberId = cookieStore.get(COOKIE_ID.MEMBER_ID)?.value;

  if (!memberId) {
    redirect('/login');
  }

  await Promise.all([
    queryClient.fetchQuery(bookQueryOptions.count(memberId)),
    queryClient.fetchQuery(memberQueryOptions.point()),
    queryClient.fetchQuery(itemQueryOptions.equipped()),
  ]);

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Home memberId={memberId} />
    </HydrationBoundary>
  );
};

export default HomePage;
