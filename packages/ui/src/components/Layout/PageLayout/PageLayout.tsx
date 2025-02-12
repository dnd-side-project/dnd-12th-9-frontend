import { ComponentProps, PropsWithChildren, ReactNode } from 'react';

import { cn } from '@/lib/core';

export type LayoutProps = {
  header?: ReactNode;
} & ComponentProps<'div'>;

export const PageLayout = ({ header, children, className }: PropsWithChildren<LayoutProps>) => {
  return (
    <>
      {header}
      <div className={cn('grow overflow-scroll', className)}>{children}</div>
    </>
  );
};
