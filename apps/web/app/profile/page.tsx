import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

import { HydrationBoundary, dehydrate, QueryClient } from '@tanstack/react-query';

import { bookQueryOptions } from 'app/_api/queries/book';
import { itemQueryOptions } from 'app/_api/queries/item';
import { COOKIE_ID } from 'app/_constants/cookie';
import { ROUTES } from 'app/_constants/route';

import { Profile } from './_components/Profile';

const queryClient = new QueryClient();

const ProfilePage = async () => {
  const cookieStore = await cookies();
  const memberId = cookieStore.get(COOKIE_ID.MEMBER_ID)?.value;

  if (!memberId) {
    redirect(ROUTES.LOGIN);
  }

  await Promise.all([
    queryClient.fetchQuery(itemQueryOptions.list(memberId)),
    queryClient.fetchQuery(bookQueryOptions.count(memberId)),
  ]);

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Profile memberId={memberId} />
    </HydrationBoundary>
  );
};

export default ProfilePage;
