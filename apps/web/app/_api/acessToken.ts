'use server';

import { cookies } from 'next/headers';

import { COOKIE_ID } from 'app/_constants/cookie';

export const getAccessToken = async () => {
  const cookieStore = await cookies();
  return cookieStore.get('accessToken');
};

export const removeUserInfoFromCookies = async () => {
  const cookieStore = await cookies();
  cookieStore.delete(COOKIE_ID.ACCESS_TOKEN);
  cookieStore.delete(COOKIE_ID.MEMBER_ID);
  cookieStore.delete(COOKIE_ID.REFRESH_TOKEN);
};

export const setNicknameToCookie = async (nickname: string) => {
  const cookieStore = await cookies();
  cookieStore.set(COOKIE_ID.NICKNAME, nickname);
};
