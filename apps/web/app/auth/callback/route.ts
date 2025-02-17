import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

import { authRepository } from 'app/_api/auth';

export async function GET(request: NextRequest) {
  try {
    const cookieList = await cookies();

    const searchParams = request.nextUrl.searchParams;
    const refreshToken = searchParams.get('refreshToken');

    if (!refreshToken) {
      return NextResponse.redirect(new URL('/login?error=refreshToken-is-none', request.url));
    }

    cookieList.set('refreshToken', refreshToken);
    //TODO 닉네임 여부에 따라 onboarding으로 갈지 홈페이지로 갈지 로직 구현 필요
    const response = await authRepository.reissue(refreshToken);

    const {
      data: { memberId },
    } = await response.json();

    const accessToken = response.headers.get('Authorization')?.replace('Bearer ', '');

    if (!accessToken) {
      return NextResponse.redirect(new URL('/login?error=accessToken-is-none', request.url));
    }

    if (!memberId) {
      return NextResponse.redirect(new URL('/login?error=memberId-is-none', request.url));
    }

    cookieList.set('accessToken', accessToken);
    cookieList.set('memberId', memberId);

    return NextResponse.redirect(new URL('/', request.url));
  } catch (error) {
    console.warn(error);
    return NextResponse.redirect(new URL('/login?error=error.message', request.url));
  }
}
