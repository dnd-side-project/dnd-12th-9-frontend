import { ComponentProps, PropsWithChildren, ReactNode } from 'react';

import { cn } from '../../lib/core';

export type HeaderProps = {
  left?: ReactNode;
  right?: ReactNode;
} & ComponentProps<'div'>;

export const Header = ({
  left,
  right,
  children,
  className,
  ...restProps
}: PropsWithChildren<HeaderProps>) => {
  return (
    <div className={cn('relative flex h-12 items-center justify-center', className)} {...restProps}>
      {left}
      {children}
      {right}
    </div>
  );
};
