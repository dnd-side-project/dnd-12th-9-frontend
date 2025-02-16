import { instance } from './fetcher';

export const authRepository = {
  reissue: async (refreshToken: string) =>
    instance.post<{
      resultType: string;
      data: {
        memberId: string;
      };
    }>('auth/reissue', {
      headers: {
        Cookie: `refreshToken=${refreshToken}`,
      },
    }),
};
