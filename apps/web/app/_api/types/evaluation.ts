import { ResponseFormat } from './response';

export type GetBookEvaluationListAPIRequest = {
  bookId: string;
};

type Evaluation = {
  evaluationId: number;
  type: string;
  keyword: string;
  icon: string;
  isSelected: boolean;
};

export type GetBookEvaluationListAPIResponse = ResponseFormat<Evaluation[]>;

export type UpdateBookEvaluationRequest = {
  bookId: string;
  keywordIds: string[];
};
