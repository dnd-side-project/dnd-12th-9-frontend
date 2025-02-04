import type { ComponentProps, ElementType } from 'react';

export type AsProp<C extends ElementType> = {
  as?: C;
};

export type KeyWithAs<C extends ElementType, Props> = keyof (AsProp<C> & Props);

export type PolymorphicRef<C extends ElementType> = ComponentProps<C>['ref'];

export type PolymorphicComponentProps<C extends ElementType, Props = object> = (Props & AsProp<C>) &
  Omit<ComponentProps<C>, KeyWithAs<C, Props>>;
