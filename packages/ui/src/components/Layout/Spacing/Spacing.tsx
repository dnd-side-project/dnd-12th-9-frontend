import { type JSX, type ElementType, PropsWithChildren } from 'react';

import { type BoxProps, Box } from '../Box';

export const Spacing: <C extends ElementType = 'div'>(
  props: PropsWithChildren<BoxProps<C>>
) => JSX.Element = <C extends ElementType = 'div'>(props: PropsWithChildren<BoxProps<C>>) => {
  return <Box {...props} />;
};
