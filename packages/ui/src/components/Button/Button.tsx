import type { ComponentProps, PropsWithChildren, ReactNode } from 'react';

import { cva } from 'class-variance-authority';

import { cn } from '@/lib/core';

import { Icon } from '../Icon';
import { IconType } from '../Icon/assets';
import { HStack } from '../Layout';
import { Text } from '../Text';
import { Typography } from '../Text/Text';

import { OrgIcon } from './assets/OrbIcon';

export type ButtonSize = 'sm' | 'md' | 'lg';
export type ButtonVariant = 'primary50' | 'black' | 'gray100' | 'orange' | 'gray200';

export type ButtonProps = {
  iconType?: IconType;
  right?: ReactNode;
  size?: ButtonSize;
  variant?: ButtonVariant;
} & ComponentProps<'button'>;

const buttonVariantMap = cva('relative flex justify-center items-center rounded-lg gap-1', {
  variants: {
    size: {
      sm: 'w-[101px] h-[38px]',
      md: 'w-[132px] h-11',
      lg: 'w-[343px] h-[52px]',
    },
    variant: {
      primary50:
        'bg-primary-50 text-primary-600 hover:bg-primary-100 disabled:bg-gray-400 disabled:text-gray-500',
      black: '-gray-800 text-white hover:bg-black disabled:bg-gray-600 disabled:text-gray-400',
      gray100:
        'bg-gray-100 text-gray-600 hover:bg-gray-200 disabled:bg-gray-400 disabled:text-gray-500',
      orange:
        'bg-primary-500 text-primary-50 hover:bg-primary-700 disabled:bg-gray-600 disabled:text-gray-400',
      gray200:
        'bg-gray-200 text-gray-600 hover:bg-gray-700 disabled:bg-gray-400 disabled:text-gray-500',
    },
  },
});

const buttonTextVariantMap = {
  sm: {
    type: 'Title2',
    weight: 'medium',
  },
  md: {
    type: 'Title1',
    weight: 'medium',
  },
  lg: {
    type: 'Heading3',
    weight: 'semibold',
  },
} satisfies {
  [key in ButtonSize]: {
    type: Typography;
    weight: 'medium' | 'semibold';
  };
};

export function Button({
  children,
  iconType,
  right,
  size = 'md',
  variant = 'orange',
  className,
  disabled,
  ...restProps
}: PropsWithChildren<ButtonProps>) {
  return (
    <button
      className={cn(
        buttonVariantMap({
          size,
          variant,
        }),
        className
      )}
      disabled={disabled}
      {...restProps}
    >
      <Text {...buttonTextVariantMap[size]}>{children}</Text>
      {iconType && <Icon type={iconType} color={disabled ? 'gray600' : 'gray500'} size={16} />}
      {right}
    </button>
  );
}

export type ButtonElementProps = {
  count: number;
} & ComponentProps<'div'>;

export function ButtonElement({ count }: ButtonElementProps) {
  return (
    <HStack className="absolute right-3 top-3 gap-1 rounded-2xl bg-black/30 px-2 py-1">
      <OrgIcon />
      <Text type="Title2" weight="medium" className="text-white">
        {count}
      </Text>
    </HStack>
  );
}
