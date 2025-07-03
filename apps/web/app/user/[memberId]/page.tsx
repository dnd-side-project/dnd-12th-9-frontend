import { cookies } from 'next/headers';

import { dehydrate, HydrationBoundary } from '@tanstack/react-query';

import { bookQueryOptions } from 'app/_api/queries/book';
import { itemQueryOptions } from 'app/_api/queries/item';
import { COOKIE_ID } from 'app/_constants/cookie';
import { getQueryClient } from 'app/_util/queryClient';
import { getUserType } from 'app/_util/userType';

import { Home } from '../_components/Home';

type UserPageProps = {
  params: Promise<{ memberId: string }>;
};

const UserPage = async ({ params }: UserPageProps) => {
  const cookieStore = await cookies();
  const myMemberId = cookieStore.get(COOKIE_ID.MEMBER_ID)?.value;

  const memberId = (await params).memberId;
  const userType = getUserType(memberId, myMemberId);

  const queryClient = getQueryClient();

  queryClient.prefetchQuery(bookQueryOptions.count({ ownerId: memberId, readStatus: 'COMPLETED' }));
  queryClient.prefetchQuery(bookQueryOptions.point());

  const isOwner = userType === 'OWNER';

  if (isOwner) {
    queryClient.prefetchQuery(itemQueryOptions.equipped());
  }

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Home memberId={memberId} userType={userType} />
    </HydrationBoundary>
  );
};

export default UserPage;
