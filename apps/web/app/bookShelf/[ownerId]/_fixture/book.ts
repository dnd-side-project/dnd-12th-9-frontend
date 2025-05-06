const MOCK_BOOK = {
  title: '인간 실격',
  description: '디자이 오사무',
  imageURL: 'https://picsum.photos/200/300?random=1',
};

export const MOCK_BOOK_LIST = Array.from({ length: 7 }, () => MOCK_BOOK);
export const EMPTY_BOOK_LIST = [] as const;
