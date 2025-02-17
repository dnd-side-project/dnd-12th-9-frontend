import { ComponentProps, PropsWithChildren, ReactNode } from 'react';

import { cn } from '../../../lib/core';
import { Stack } from '../Stack';

export type LayoutProps = {
  header?: ReactNode;
  containerClassName?: string;
} & ComponentProps<'div'>;

export const PageLayout = ({
  header,
  children,
  className,
  containerClassName,
}: PropsWithChildren<LayoutProps>) => {
  return (
    <Stack className={cn('h-full', containerClassName)}>
      {header}
      <div className={cn('grow overflow-scroll', className)}>{children}</div>
    </Stack>
  );
};
