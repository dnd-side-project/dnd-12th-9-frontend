import { queryOptions } from '@tanstack/react-query';

import { fetcher } from '../fetcher';
import { GetEquippedItemResponse, GetItemListAPIResponse } from '../types/item';

export const itemQueryKeys = {
  all: () => ['items'],
  lists: () => [...itemQueryKeys.all(), 'list'],
  equippeds: () => [...itemQueryKeys.all(), 'equipped'],
};

export const itemQueryOptions = {
  list: (memberId: string) =>
    queryOptions({
      queryKey: [...itemQueryKeys.lists(), memberId],
      queryFn: getItemListAPI,
    }),
  equipped: (memberId: string) =>
    queryOptions({
      queryKey: [...itemQueryKeys.equippeds(), memberId],
      queryFn: () => getEquippedItemAPI(memberId),
    }),
};

const getItemListAPI = () => fetcher.get<GetItemListAPIResponse>('items');

const getEquippedItemAPI = (memberId: string) =>
  fetcher.get<GetEquippedItemResponse>(`v2/members/${memberId}/items/equipped`);
