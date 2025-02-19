import ky, { type Options, type ResponsePromise } from 'ky';

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
        // FIXME 인증 오류 발생시 로그인 페이지로 리다이렉트하는 코드, 개발 편의성을 위해 주석처리
        // if (!response.ok && response.status === 401) {
        //   redirect('/login');
        // }
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
};
