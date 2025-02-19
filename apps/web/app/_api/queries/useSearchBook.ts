import { useInfiniteQuery } from '@tanstack/react-query';

import { book } from '../queryKey';

const useSearchBook = (bookName: string) => {
  return useInfiniteQuery({
    ...book.search(bookName),
    enabled: !!bookName && bookName.length > 1,
  });
};
export default useSearchBook;
