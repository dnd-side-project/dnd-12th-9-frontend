// FIXME 액세스 토큰이 없을때 로그인 페이지로 리다이렉트 시키는 코드, 개발 편의성을 위해 주석처리

import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

export async function middleware(request: NextRequest) {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get('accessToken');

  const response = NextResponse.next();

  const isAuthPage = ['/login', '/auth'].some((path) => request.nextUrl.pathname.startsWith(path));

  // accessToken이 없고 auth 관련 페이지가 아닐때
  // if (!accessToken && !isAuthPage) {
  //   return NextResponse.redirect(new URL('/login', request.url));
  // }

  if (accessToken && isAuthPage) {
    const referer = request.headers.get('referer');
    if (referer && !referer.includes('/login')) {
      return NextResponse.redirect(referer);
    }
    return NextResponse.redirect(new URL('/', request.url));
  }

  return response;
}
