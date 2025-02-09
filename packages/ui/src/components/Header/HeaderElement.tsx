import { ComponentProps, PropsWithChildren } from 'react';

import { cva } from 'class-variance-authority';

import { cn } from '../../lib/core';
import { Center } from '../Layout/Center';

const headerElementClasses = cva('absolute top-0 h-full flex-shrink-0 px-4', {
  variants: {
    direction: {
      left: 'left-0',
      right: 'right-0',
    },
  },
});

type HeaderElementProps = ComponentProps<'button'>;

type HeaderLeftElementProps = HeaderElementProps;

export const HeaderLeftElement = ({
  children,
  className,
  ...restProps
}: PropsWithChildren<HeaderLeftElementProps>) => {
  return (
    <Center
      as="button"
      className={cn(headerElementClasses({ direction: 'left' }), className)}
      {...restProps}
    >
      {children}
    </Center>
  );
};

export type HeaderRightElementProps = HeaderElementProps;

export const HeaderRightElement = ({
  children,
  className,
  ...restProps
}: PropsWithChildren<HeaderRightElementProps>) => {
  return (
    <Center
      as="button"
      className={cn(headerElementClasses({ direction: 'right' }), className)}
      {...restProps}
    >
      {children}
    </Center>
  );
};
