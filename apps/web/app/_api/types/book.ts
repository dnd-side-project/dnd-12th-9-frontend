export type Book = {
  title: string;
  author: string;
  publishedAt: string;
  thumbnail: string;
};

export type SearchBookResponse = {
  resultType: string;
  data: {
    books: Book[];
  };
  pageInfo: {
    inEnd: boolean;
    pageableCount: number;
    totalCount: number;
    page: number;
  };
  error: {
    code: string;
    message: string;
    data: object;
  };
};
