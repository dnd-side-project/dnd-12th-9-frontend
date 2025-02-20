import { useMutation } from '@tanstack/react-query';

import { fetcher } from '../fetcher';
import { ItemDrawResponse } from '../types/draw';

const itemDraw = () => fetcher.post<ItemDrawResponse>('items/draw');

export const useItemDraw = () => {
  return useMutation<ItemDrawResponse, Error>({
    mutationFn: itemDraw,
  });
};
