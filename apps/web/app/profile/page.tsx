import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

import { HydrationBoundary, dehydrate, QueryClient } from '@tanstack/react-query';

import { COOKIE_ID } from 'app/_constants/cookie';

import { Profile } from './_components/Profile';

const queryClient = new QueryClient();

const ProfilePage = async () => {
  const cookieStore = await cookies();
  const memberId = cookieStore.get(COOKIE_ID.MEMBER_ID)?.value;

  if (!memberId) {
    redirect('/login');
  }

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Profile memberId={memberId} />
    </HydrationBoundary>
  );
};

export default ProfilePage;
