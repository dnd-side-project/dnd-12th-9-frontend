import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    const cookieList = await cookies();

    const searchParams = request.nextUrl.searchParams;
    const refreshToken = searchParams.get('refreshToken');

    if (!refreshToken) {
      return NextResponse.redirect(new URL('/login?error=auth_failed', request.url));
    }

    cookieList.set('refreshToken', refreshToken);
    const response = await fetch('https://api.sbooky.net/dev/api/auth/reissue', {
      method: 'POST',
      credentials: 'include',
      headers: {
        Cookie: `refreshToken=${refreshToken}`,
      },
    });

    const data = await response.json();
    const memberId = data?.data?.memberId;

    const accessToken = response.headers.get('Authorization')?.replace('Bearer ', '');

    if (!accessToken || !memberId) {
      return NextResponse.redirect(new URL('/login?error=auth_failed', request.url));
    }

    cookieList.set('accessToken', accessToken);
    cookieList.set('memberId', memberId);

    return NextResponse.redirect(new URL('/', request.url));
  } catch (error) {
    console.warn(error);
    return NextResponse.redirect(new URL('/login?error=auth_failed', request.url));
  }
}
