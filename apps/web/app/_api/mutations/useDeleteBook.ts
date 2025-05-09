import { useMutation, useQueryClient } from '@tanstack/react-query';

import { fetcher } from '../fetcher';
import { bookQueryKeys } from '../queries/book';
import { DeleteBookAPIRequest } from '../types/book';

const deleteBook = ({ memberBookId }: DeleteBookAPIRequest): Promise<Response> => {
  return fetcher.delete(`books/${memberBookId}`);
};

export const useDeleteBook = () => {
  const queryClient = useQueryClient();

  return useMutation<Response, Error, DeleteBookAPIRequest>({
    mutationFn: (data: DeleteBookAPIRequest) => deleteBook(data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [...bookQueryKeys.all()],
      });
    },
  });
};
