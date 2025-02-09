import { type JSX, type ElementType, PropsWithChildren } from 'react';

import { cn } from '../../../lib/core';
import { type BoxProps, Box } from '../Box';

export const JustifyBetween: <C extends ElementType = 'div'>(
  props: PropsWithChildren<BoxProps<C>>
) => JSX.Element = <C extends ElementType = 'div'>({
  as,
  className,
  ...rest
}: PropsWithChildren<BoxProps<C>>) => {
  const typesRest = rest as BoxProps<C>;

  return <Box className={cn('flex justify-between', className)} as={as} {...typesRest} />;
};
