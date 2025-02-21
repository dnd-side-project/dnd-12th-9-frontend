import { ReadStatusTag } from 'app/_constants/status';

export const getFilterBySearchParams = (filter?: ReadStatusTag) => {
  const isAll = filter === 'ALL' || filter === undefined;

  if (isAll) {
    return undefined;
  }

  return filter;
};
