import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

import { COOKIE_ID } from './_constants/cookie';
import { ROUTES } from './_constants/route';

export default async function Home() {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get(COOKIE_ID.ACCESS_TOKEN)?.value;
  const nickname = cookieStore.get(COOKIE_ID.MEMBER_ID)?.value;

  if (!accessToken) {
    redirect(ROUTES.LOGIN);
  }

  if (!nickname) {
    redirect(ROUTES.NICKNAME);
  }

  return redirect(ROUTES.HOME);
}
