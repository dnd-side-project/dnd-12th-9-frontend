import { ComponentProps, PropsWithChildren, ReactNode } from 'react';

import { cn } from '../../lib/core';

export type HeaderProps = {
  left?: ReactNode;
  right?: ReactNode;
  borderBottom?: boolean;
} & ComponentProps<'div'>;

export const Header = ({
  left,
  right,
  children,
  className,
  borderBottom = false,
  ...restProps
}: PropsWithChildren<HeaderProps>) => {
  return (
    <div
      className={cn(
        'relative flex h-12 items-center justify-center',
        // TODO 컬러 팔레트 적용이후 수정 필요
        borderBottom && 'border-b border-gray-100',
        className
      )}
      {...restProps}
    >
      {left}
      {children}
      {right}
    </div>
  );
};
