import { useMutation } from '@tanstack/react-query';

import { fetcher } from '../fetcher';
import { ItemDrawResponse } from '../types/draw';

const itemDraw = (): Promise<ItemDrawResponse> => {
  return fetcher.post<ItemDrawResponse>('items/draw', { json: '' });
};

export const useItemDraw = () => {
  return useMutation<ItemDrawResponse, Error>({
    mutationFn: () => {
      return itemDraw();
    },
  });
};
