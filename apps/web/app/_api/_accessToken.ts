'use server';

import { cookies } from 'next/headers';

import { COOKIE_ID } from 'app/_constants/cookie';

//TODO PR 충돌을 방지하기 위한 파일 네이밍 추후 accessToken 파일과 합칠 예정

export const removeUserInfoFromCookies = async () => {
  const cookieStore = await cookies();
  cookieStore.delete(COOKIE_ID.ACCESS_TOKEN);
  cookieStore.delete(COOKIE_ID.MEMBER_ID);
  cookieStore.delete(COOKIE_ID.REFRESH_TOKEN);
};
