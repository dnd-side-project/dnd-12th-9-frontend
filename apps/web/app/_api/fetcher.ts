import ky, { type Options, type ResponsePromise } from 'ky';

import { ROUTES } from 'app/_constants/route';

import { removeUserInfoFromCookies } from './_accessToken';
import { getAccessToken } from './acessToken';

const defaultOption: Options = {
  retry: 0,
  timeout: 30_000,
};

const API_ENDPOINT = process.env.NEXT_PUBLIC_API_ENDPOINT;

export const instance = ky.create({
  prefixUrl: API_ENDPOINT,
  headers: {
    'content-type': 'application/json',
  },
  hooks: {
    beforeRequest: [
      async (request) => {
        const accessToken = await getAccessToken();

        if (accessToken) {
          request.headers.set('Authorization', `Bearer ${accessToken.value}`);
        }
      },
    ],
    afterResponse: [
      //TODO 자동 로그인 기능 추가
      async (_request, _options, response) => {
        if (!response.ok && response.status === 401) {
          await removeUserInfoFromCookies();
          // next/navigation에서 제공하는 redirect는 서버 전용이라 window.location.href를 이용해서 구현
          window.location.href = ROUTES.LOGIN;
        }
        return response;
      },
    ],
  },
  ...defaultOption,
});

export async function parseResponse<T>(response: ResponsePromise) {
  return await response.json<T>();
}

export const fetcher = {
  get: <T>(pathname: string, options?: Options) =>
    parseResponse<T>(instance.get(pathname, options)),
  post: <T>(pathname: string, options?: Options) =>
    parseResponse<T>(instance.post(pathname, options)),
  put: <T>(pathname: string, options?: Options) =>
    parseResponse<T>(instance.put(pathname, options)),
  delete: <T>(pathname: string, options?: Options) =>
    parseResponse<T>(instance.delete(pathname, options)),
  patch: <T>(pathname: string, options?: Options) =>
    parseResponse<T>(instance.patch(pathname, options)),
};
