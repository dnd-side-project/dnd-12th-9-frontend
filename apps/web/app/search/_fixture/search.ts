export const MOCK_BOOK = {
  title: '인간 실격',
  authors: '디자이 오사무',
  thumbnail: 'https://picsum.photos/200/300?random=1',
  publishedAt: '2020',
};

export const MOCK_BOOK_LIST = Array.from({ length: 4 }, () => MOCK_BOOK);
export const EMPTY_BOOK_LIST = [] as const;
