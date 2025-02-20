import { useMutation, useQueryClient } from '@tanstack/react-query';

import { fetcher } from '../fetcher';
import { itemQueryKeys } from '../queries/item';
import { UpdateEquippedItemAPIRequest } from '../types/item';

const updateEquippedItemAPI = (data: UpdateEquippedItemAPIRequest) =>
  fetcher.patch<void>('items', { json: data });

export const useUpdateEquippedItem = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: updateEquippedItemAPI,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [...itemQueryKeys.equippeds()],
      });
    },
    // TODO : 아이템 변경에 실패했을 경우 에러 처리
    onError: () => {},
  });
};
