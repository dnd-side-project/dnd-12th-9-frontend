import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';

import { COOKIE_ID } from 'app/_constants/cookie';

import { Home } from './_components/Home';

const HomePage = async () => {
  const queryClient = new QueryClient();

  const cookieStore = await cookies();
  const memberId = cookieStore.get(COOKIE_ID.MEMBER_ID)?.value;

  if (!memberId) {
    redirect('/login');
  }

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Home memberId={memberId} />
    </HydrationBoundary>
  );
};

export default HomePage;
