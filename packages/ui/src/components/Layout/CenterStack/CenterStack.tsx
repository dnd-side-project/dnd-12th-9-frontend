import { type JSX, type ElementType, PropsWithChildren } from 'react';

import { cn } from '../../../lib/core';
import { type BoxProps, Box } from '../Box';

export const CenterStack: <C extends ElementType = 'div'>(
  props: PropsWithChildren<BoxProps<C>>
) => JSX.Element = <C extends ElementType = 'div'>({
  className,
  ...rest
}: PropsWithChildren<BoxProps<C>>) => {
  const typesRest = rest as BoxProps<C>;

  return (
    <Box className={cn('flex flex-col items-center justify-center', className)} {...typesRest} />
  );
};
