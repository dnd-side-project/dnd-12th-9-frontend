import { useInfiniteQuery } from '@tanstack/react-query';

import { book } from '../queryKey';

const useSearchBook = (bookName: string, options: object) => {
  return useInfiniteQuery({
    ...book.search(bookName),
    enabled: !!bookName,
    ...options,
  });
};
export default useSearchBook;
