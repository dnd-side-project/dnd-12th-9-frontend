import { ComponentProps, PropsWithChildren } from 'react';

import { cn } from '../../lib/core';

export type IconButtonProps = ComponentProps<'button'>;

export const IconButton = ({
  children,
  className,
  ...restProps
}: PropsWithChildren<IconButtonProps>) => {
  return (
    <button className={cn('flex items-center justify-center', className)} {...restProps}>
      {children}
    </button>
  );
};
