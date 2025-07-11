import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

import { authRepository } from 'app/_api/auth';
import { COOKIE_ID } from 'app/_constants/cookie';
import { DYNAMIC_ROUTES, ROUTES } from 'app/_constants/route';

/**
 * Handles authentication token reissuance and user redirection for GET requests.
 *
 * Extracts a refresh token from the request, attempts to reissue authentication tokens, sets relevant cookies, and redirects the user based on authentication and profile status. Redirects to the login page with an error on failure.
 *
 * @param request - The incoming HTTP GET request
 * @returns A redirect response to the appropriate route based on authentication outcome
 */
export async function GET(request: NextRequest) {
  try {
    const cookieList = await cookies();

    const searchParams = request.nextUrl.searchParams;
    const refreshToken = searchParams.get('refreshToken');

    if (!refreshToken) {
      return NextResponse.redirect(new URL(`${ROUTES.LOGIN}?error=auth_failed`, request.url));
    }

    cookieList.set(COOKIE_ID.REFRESH_TOKEN, refreshToken);

    const response = await authRepository.reissue(refreshToken);

    const {
      data: { memberId, nickname },
    } = await response.json();

    const accessToken = response.headers.get('Authorization')?.replace('Bearer ', '');

    if (!accessToken || !memberId) {
      return NextResponse.redirect(new URL(`${ROUTES.LOGIN}?error=auth_failed`, request.url));
    }

    cookieList.set(COOKIE_ID.ACCESS_TOKEN, accessToken);
    cookieList.set(COOKIE_ID.MEMBER_ID, memberId);

    if (nickname) {
      cookieList.set(COOKIE_ID.NICKNAME, nickname);
      return NextResponse.redirect(new URL(DYNAMIC_ROUTES.USER(memberId), request.url));
    }

    return NextResponse.redirect(new URL(ROUTES.NICKNAME, request.url));
  } catch (error) {
    console.warn(error);
    return NextResponse.redirect(new URL(`${ROUTES.LOGIN}?error=auth_failed`, request.url));
  }
}
