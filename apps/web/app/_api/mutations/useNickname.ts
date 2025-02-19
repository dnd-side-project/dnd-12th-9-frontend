import { useMutation } from '@tanstack/react-query';

import { fetcher } from '../fetcher';

const updateNicknameAPI = (data: { nickname: string }) =>
  fetcher.post('members/onboarding', { json: data });

export const useNickname = () => {
  return useMutation({
    mutationFn: updateNicknameAPI,
    // TODO : 에러 시 토스트
    onError: () => {},
  });
};
