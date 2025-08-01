import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

import { COOKIE_ID } from 'app/_constants/cookie';
import { DYNAMIC_ROUTES, ROUTES } from 'app/_constants/route';

export async function middleware(request: NextRequest) {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get(COOKIE_ID.ACCESS_TOKEN)?.value;
  const nickname = cookieStore.get(COOKIE_ID.NICKNAME)?.value;
  const memberId = cookieStore.get(COOKIE_ID.MEMBER_ID)?.value ?? '';

  const isRootPage = request.nextUrl.pathname === '/';

  const isLoggedIn = Boolean(accessToken) && Boolean(memberId);
  const hasNickname = Boolean(nickname);

  if (isRootPage) {
    if (isLoggedIn) {
      return hasNickname
        ? NextResponse.redirect(new URL(DYNAMIC_ROUTES.USER(memberId), request.url))
        : NextResponse.redirect(new URL(ROUTES.NICKNAME, request.url));
    }

    return NextResponse.next();
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    {
      source: '/((?!auth/callback|_next/static|_next/image|favicon.ico|error).*)',
      missing: [
        { type: 'header', key: 'next-router-prefetch' },
        { type: 'header', key: 'purpose', value: 'prefetch' },
      ],
    },
  ],
};
