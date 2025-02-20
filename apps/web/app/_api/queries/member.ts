import { queryOptions } from '@tanstack/react-query';

import { fetcher } from '../fetcher';
import { MemberPoint } from '../types/member';
export const memberQueryKeys = {
  all: () => ['member'],
  point: () => [...memberQueryKeys.all(), 'point'],
};

export const memberQueryOptions = {
  point: () =>
    queryOptions({
      queryKey: [...memberQueryKeys.point()],
      queryFn: getMemberPointAPI,
    }),
};

const getMemberPointAPI = () => fetcher.get<MemberPoint>('members/point');
