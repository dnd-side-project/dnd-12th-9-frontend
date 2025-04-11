import { ComponentProps, PropsWithChildren, ReactNode } from 'react';

import { cn } from '../../lib/core';
import { Text } from '../Text';

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
        'relative flex min-h-12 items-center justify-center text-gray-800',
        borderBottom && 'border-b border-gray-100',
        className
      )}
      {...restProps}
    >
      {left}
      <Text type="Heading3" weight="semibold">
        {children}
      </Text>
      {right}
    </div>
  );
};
