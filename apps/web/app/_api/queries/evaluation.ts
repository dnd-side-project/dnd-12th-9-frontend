import { queryOptions } from '@tanstack/react-query';

import { fetcher } from '../fetcher';
import {
  GetBookEvaluationListAPIRequest,
  GetBookEvaluationListAPIResponse,
} from '../types/evaluation';

export const evaluaionQueryKeys = {
  all: () => ['evaluaion'],
  lists: () => [...evaluaionQueryKeys.all(), 'list'],
};

export const evaluaionQueryOptions = {
  list: (bookId: string) =>
    queryOptions({
      queryKey: [...evaluaionQueryKeys.lists(), bookId],
      queryFn: () => getBookEvaluationListAPI({ bookId }),
    }),
};

const getBookEvaluationListAPI = ({ bookId }: GetBookEvaluationListAPIRequest) =>
  fetcher.get<GetBookEvaluationListAPIResponse>(`books/${bookId}/evaluation`);
