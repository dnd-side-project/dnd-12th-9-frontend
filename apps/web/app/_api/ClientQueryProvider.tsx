'use client';

import { QueryClientProvider } from '@tanstack/react-query';

import { getQueryClient } from 'app/_util/queryClient';

export const ClientQueryProvider = ({ children }: React.PropsWithChildren) => {
  const queryClient = getQueryClient();

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};
