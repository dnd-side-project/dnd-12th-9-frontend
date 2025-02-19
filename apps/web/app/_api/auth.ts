import { instance } from './fetcher';

export const authRepository = {
  reissue: async (refreshToken: string) =>
    instance.post<{
      data: {
        memberId: string;
        nickname: string;
      };
    }>('auth/reissue', {
      headers: {
        Cookie: `refreshToken=${refreshToken}`,
      },
    }),
};
