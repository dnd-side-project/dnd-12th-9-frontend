import { useMutation, useQueryClient } from '@tanstack/react-query';

import { fetcher } from '../fetcher';
import { bookQueryKeys } from '../queries/book';
import { NewBook } from '../types/book';

const addBook = (data: NewBook): Promise<Response> => {
  return fetcher.post('books', { json: data });
};

export const useAddBook = () => {
  const queryClient = useQueryClient();
  return useMutation<Response, Error, NewBook>({
    mutationFn: (data: NewBook) => addBook(data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [...bookQueryKeys.add()],
      });
    },
    // TODO : 책 등록에 실패했을 경우 에러 처리
    onError: () => {},
  });
};
