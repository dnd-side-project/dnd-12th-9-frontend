import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

import { HydrationBoundary, dehydrate } from '@tanstack/react-query';

import { bookQueryOptions } from 'app/_api/queries/book';
import { itemQueryOptions } from 'app/_api/queries/item';
import { COOKIE_ID } from 'app/_constants/cookie';
import { ROUTES } from 'app/_constants/route';
import { getQueryClient } from 'app/_util/queryClient';

import { Profile } from './_components/Profile';

const ProfilePage = async () => {
  const cookieStore = await cookies();
  const memberId = cookieStore.get(COOKIE_ID.MEMBER_ID)?.value;

  if (!memberId) {
    redirect(ROUTES.LOGIN);
  }

  const queryClient = getQueryClient();

  queryClient.prefetchQuery(itemQueryOptions.equipped(memberId));
  queryClient.prefetchQuery(bookQueryOptions.count({ ownerId: memberId, readStatus: 'COMPLETED' }));

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Profile memberId={memberId} />
    </HydrationBoundary>
  );
};

export default ProfilePage;
