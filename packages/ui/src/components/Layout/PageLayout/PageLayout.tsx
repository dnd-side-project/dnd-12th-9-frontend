import { ComponentProps, PropsWithChildren, ReactNode } from 'react';

import { cn } from '@/lib/core';

import { Stack } from '../Stack';

export type LayoutProps = {
  header?: ReactNode;
} & ComponentProps<'div'>;

export const PageLayout = ({ header, children, className }: PropsWithChildren<LayoutProps>) => {
  return (
    <Stack className="h-full">
      {header}
      <div className={cn('grow overflow-scroll', className)}>{children}</div>
    </Stack>
  );
};
