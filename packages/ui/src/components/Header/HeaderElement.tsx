import { PropsWithChildren } from 'react';

import { cn } from '../../lib/core';
import { type IconButtonProps, IconButton } from '../IconButton';

export type HeaderLeftElementProps = IconButtonProps;

export const HeaderLeftElement = ({
  children,
  className,
  ...restProps
}: PropsWithChildren<HeaderLeftElementProps>) => {
  return (
    <IconButton className={cn('absolute left-0 top-0', className)} {...restProps}>
      {children}
    </IconButton>
  );
};

export type HeaderRightElementProps = IconButtonProps;

export const HeaderRightElement = ({
  children,
  className,
  ...restProps
}: PropsWithChildren<HeaderRightElementProps>) => {
  return (
    <IconButton className={cn('absolute right-0 top-0', className)} {...restProps}>
      {children}
    </IconButton>
  );
};
