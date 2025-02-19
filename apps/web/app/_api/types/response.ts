export type ResponseFormat<T> = {
  resultType: 'SUCCESS' | 'ERROR';
  data: T;
  error: {
    code: string;
    message: string;
    data: object;
  };
};
