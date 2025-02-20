import { queryOptions } from '@tanstack/react-query';

import { fetcher } from '../fetcher';
import { GetMemberCompletedBookAPIResponse, MemberPoint } from '../types/member';
export const memberQueryKeys = {
  all: () => ['member'],
  point: () => [...memberQueryKeys.all(), 'point'],
  completed: () => [...memberQueryKeys.all(), 'completed'],
};

export const memberQueryOptions = {
  point: () =>
    queryOptions({
      queryKey: [...memberQueryKeys.point()],
      queryFn: getMemberPointAPI,
    }),
  completed: (memberId: string) =>
    queryOptions({
      queryKey: [...memberQueryKeys.completed()],
      queryFn: () => getMemberCompletedBookAPI(memberId),
    }),
};

const getMemberPointAPI = () => fetcher.get<MemberPoint>('members/point');

const getMemberCompletedBookAPI = (memberId: string) =>
  fetcher.get<GetMemberCompletedBookAPIResponse>(`books/members/${memberId}/completed`);
