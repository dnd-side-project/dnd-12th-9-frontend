import type { ComponentProps, PropsWithChildren, ReactNode } from 'react';

import { cva } from 'class-variance-authority';

import { cn } from '../../lib/core';
import { Icon } from '../Icon';
import { IconType } from '../Icon/assets';
import { HStack } from '../Layout';
import { Text } from '../Text';
import { Typography } from '../Text/Text';

import { OrgIcon } from './assets/OrbIcon';

export type ButtonSize = 'sm' | 'md' | 'lg';
export type ButtonVariant = 'primary50' | 'black' | 'gray100' | 'primary500' | 'gray200';

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
      black: 'bg-gray-800 text-white hover:bg-black disabled:bg-gray-600 disabled:text-gray-400',
      gray100:
        'bg-gray-100 text-gray-600 hover:bg-gray-200 disabled:bg-gray-400 disabled:text-gray-500',
      primary500:
        'bg-primary-500 text-primary-50 hover:bg-primary-700 disabled:bg-gray-600 disabled:text-gray-400',
      gray200:
        'bg-gray-200 text-gray-600 hover:bg-gray-700 disabled:bg-gray-400 disabled:text-gray-500',
    },
  },
  compoundVariants: [
    {
      variant: ['primary50', 'primary500'],
      size: 'lg',
      className: 'text-white',
    },
  ],
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

/**
 * Renders a customizable button with optional icon, right-side content, and adjustable size and style variant.
 *
 * @param children - The button label or content.
 * @param iconType - Optional icon identifier to display before the button text.
 * @param right - Optional content to display on the right side of the button.
 * @param size - Button size; defaults to 'md'.
 * @param variant - Button style variant; defaults to 'primary500'.
 * @param className - Additional class names for the button.
 * @param disabled - Whether the button is disabled.
 *
 * @returns A styled button element with optional icon and right-side content.
 */
export function Button({
  children,
  iconType,
  right,
  size = 'md',
  variant = 'primary500',
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
      <Text {...buttonTextVariantMap[size]} className="text-nowrap">
        {children}
      </Text>
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
