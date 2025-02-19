import { cn } from '@/lib/core';

type ContentProps = {
  /**
   * optional, can be used to display a graphic in the modal.
   * @default false
   */
  graphic?: boolean;
  /**
   * The class name for the content container.
   * @default ''
   */
  contentClassName?: string;
  /**
   * The children to be displayed inside the modal.
   */
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

export function Content({ graphic, contentClassName = '', children }: ContentProps) {
  return (
    <div
      className={cn(
        `relative z-50 w-80 rounded-2xl bg-white pb-6 pt-8 shadow-lg ${graphic ? 'px-5' : 'px-6'}`,
        contentClassName
      )}
    >
      {children}
    </div>
  );
}
