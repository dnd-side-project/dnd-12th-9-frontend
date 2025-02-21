import { useMutation, useQueryClient } from '@tanstack/react-query';

import { fetcher } from '../fetcher';
import { bookQueryKeys } from '../queries/book';
import { UpdateBookAPIRequest } from '../types/book';

const updateBookAPI = ({ bookId, ...rest }: UpdateBookAPIRequest) =>
  fetcher.put(`books/${bookId}`, {
    json: {
      ...rest,
    },
  });

export const useUpdateBook = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateBookAPI,
    // TODO : 에러 시 토스트
    onError: () => {},
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [...bookQueryKeys.all()],
      });
    },
  });
};
