import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

import { COOKIE_ID } from './_constants/cookie';

export default async function Home() {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get(COOKIE_ID.ACCESS_TOKEN)?.value;
  const nickname = cookieStore.get(COOKIE_ID.MEMBER_ID)?.value;

  if (!accessToken) {
    redirect('/login');
  }

  if (!nickname) {
    redirect('/nickname');
  }

  return redirect('/home');
}
