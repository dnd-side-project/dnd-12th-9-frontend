import { cva } from 'class-variance-authority';

import { cn } from '../../lib/core';

export type Typography =
  | 'Heading1'
  | 'Heading2'
  | 'Heading3'
  | 'Title1'
  | 'Title2'
  | 'Body1'
  | 'Body2'
  | 'caption';

const variantClasses = cva('whitespace-pre-line select-none', {
  variants: {
    type: {
      Heading1: 'text-[22px] leading-[1.4]',
      Heading2: 'text-xl leading-[1.4]',
      Heading3: 'text-lg leading-[1.4]',
      Title1: 'text-base leading-[1.4]',
      Title2: 'text-sm leading-[1.4]',
      Body1: 'text-base leading-[1.5] ',
      Body2: 'text-sm leading-[1.5]',
      caption: 'text-xs leading-[1.5] inline-block',
    },
    weight: {
      regular: 'font-normal',
      medium: 'font-medium',
      semibold: 'font-semibold',
      bold: 'font-bold',
    },
  },
  defaultVariants: {
    weight: 'medium',
  },
});

type Props = {
  /**
   * The type of text to render
   */
  type: Typography;
  /**
   * The weight of the text
   * @default 'regular'
   */
  weight?: 'regular' | 'medium' | 'semibold' | 'bold';
} & React.HTMLAttributes<HTMLParagraphElement>;

export function Text({ type, weight = 'regular', className, ...props }: Props) {
  return <p className={cn(variantClasses({ type, weight }), className)} {...props} />;
}
