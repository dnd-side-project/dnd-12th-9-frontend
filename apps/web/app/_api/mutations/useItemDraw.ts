import { useMutation, useQueryClient } from '@tanstack/react-query';

import { fetcher } from '../fetcher';
import { bookQueryKeys } from '../queries/book';
import { ItemDrawResponse } from '../types/draw';

const itemDraw = () => fetcher.post<ItemDrawResponse>('items/draw');

export const useItemDraw = () => {
  const queryClient = useQueryClient();

  return useMutation<ItemDrawResponse, Error>({
    mutationFn: itemDraw,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [...bookQueryKeys.point()],
      });
    },
  });
};
