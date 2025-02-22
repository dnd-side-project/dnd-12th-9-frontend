import { useMutation, useQueryClient } from '@tanstack/react-query';

import { fetcher } from '../fetcher';
import { bookQueryKeys } from '../queries/book';
import { UpdateBookEvaluationRequest } from '../types/evaluation';

const updateEvaluationAPI = ({ bookId, keywordIds }: UpdateBookEvaluationRequest) =>
  fetcher.put(`books/${bookId}/evaluation`, {
    json: {
      keywordIds,
    },
  });

export const useUpdateEvaluation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: updateEvaluationAPI,
    // TODO : 에러 시 토스트
    onError: () => {},
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [...bookQueryKeys.all()],
      });
    },
  });
};
