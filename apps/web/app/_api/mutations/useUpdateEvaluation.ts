import { useMutation } from '@tanstack/react-query';

import { fetcher } from '../fetcher';
import { UpdateBookEvaluationRequest } from '../types/evaluation';

const updateEvaluationAPI = ({ bookId, keywordIds }: UpdateBookEvaluationRequest) =>
  fetcher.put(`books/${bookId}/evaluation`, {
    json: {
      keywordIds,
    },
  });

export const useUpdateEvaluation = () => {
  return useMutation({
    mutationFn: updateEvaluationAPI,
    // TODO : 에러 시 토스트
    onError: () => {},
  });
};
