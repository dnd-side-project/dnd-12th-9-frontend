import { ComponentProps, PropsWithChildren } from 'react';

import { cn } from '../../lib/core';

export type IconButtonProps = ComponentProps<'button'>;

export const IconButton = ({
  children,
  className,
  ...restProps
}: PropsWithChildren<IconButtonProps>) => {
  return (
    <button
      className={cn('flex h-full flex-shrink-0 items-center justify-center px-4 py-3', className)}
      {...restProps}
    >
      {children}
    </button>
  );
};
