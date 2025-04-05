import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

import { COOKIE_ID } from 'app/_constants/cookie';
import { ROUTES } from 'app/_constants/route';

export async function middleware(request: NextRequest) {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get(COOKIE_ID.ACCESS_TOKEN)?.value;
  const nickname = cookieStore.get(COOKIE_ID.MEMBER_ID)?.value;

  const isRootPage = request.nextUrl.pathname === '/';
  const isAuthCallbackPage = request.nextUrl.pathname.startsWith('/auth/callback');
  const isAuthPage = isRootPage || isAuthCallbackPage;

  const isLoggedIn = Boolean(accessToken);
  const hasNickname = Boolean(nickname);

  if (isAuthPage) {
    if (isLoggedIn) {
      return hasNickname
        ? NextResponse.redirect(new URL(ROUTES.HOME, request.url))
        : NextResponse.redirect(new URL(ROUTES.ONBOARDING, request.url));
    }

    return NextResponse.next();
  }

  return NextResponse.next();
}
