import { ComponentProps } from 'react';

import { cva } from 'class-variance-authority';

import { cn } from '@/lib/core';

type Props = {
  /**
   * The variant of the Chip.
   *  @default 'large'
   */
  variant: 'rounded' | 'keyword' | 'graphic';
  /**
   * Whether the Chip is active.
   * @default false
   */
  active: boolean;
  /**
   * The children of the Chip.
   */
  className?: string;
  /**
   * The children of the Chip.
   */
  children: React.ReactNode;
} & ComponentProps<'button'>;

export const ChipVariants = cva(`flex items-center rounded-lg`, {
  variants: {
    variant: {
      rounded:
        'px-4 py-[6px] rounded-full text-gray-600 outline outline-gray-100 font-medium text-sm',
      keyword: 'px-5 py-[10px] text-gray-700 font-medium text-sm',
      graphic: 'px-[14.5px] py-[15px] text-gray-900 font-medium text-base',
    },
    active: {
      true: 'bg-primary-50 text-primary-600 outline outline-primary-500',
      false: 'bg-gray-50',
    },
  },
  compoundVariants: [
    {
      variant: 'rounded',
      active: false,
      className: 'bg-white',
    },
  ],
  defaultVariants: {
    variant: 'keyword',
  },
});

export function Chip({ variant, active, children, className, ...props }: Props) {
  return (
    <button className={cn(ChipVariants({ variant, active }), className)} {...props}>
      {children}
    </button>
  );
}
