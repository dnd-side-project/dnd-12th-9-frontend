import { ComponentProps } from 'react';

import { motion } from 'motion/react';

import { cn } from '../../lib/core';
import { FADE_IN_ANIMATION } from '../../lib/motions';
import { Portal } from '../Portal';

import { Content } from './ModalContent';

type Props = {
  /**
   * Indicates whether the modal is currently open.
   * @default false
   */
  isOpen: boolean;
  /**
   *  A function that is called when the user clicks outside the modal.
   */
  onClickOutside: VoidFunction;
  /**
   * optional, can be used to display a graphic in the modal.
   * @default false
   */
  graphic?: boolean;
  /**
   * The content to be displayed inside the modal.
   */
  children: React.ReactNode;
  /**
   * The class name for the modal
   * @default ''
   * */
  className?: string;
  /**
   * The class name for the content
   * @default ''
   * */
  contentClassName?: string;
} & ComponentProps<'div'>;

export function Modal({
  isOpen,
  onClickOutside,
  graphic = false,
  className = '',
  contentClassName = '',
  children,
}: Props) {
  const onClickOutsideDefault = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target instanceof HTMLElement && e.target === e.currentTarget && onClickOutside) {
      onClickOutside();
    }
  };

  return (
    <Portal isOpen={isOpen} mode="wait">
      <motion.div
        onClick={onClickOutsideDefault}
        variants={FADE_IN_ANIMATION}
        initial="initial"
        animate="animate"
        exit="exit"
        className={cn(
          'fixed inset-0 z-50 flex items-center justify-center bg-gray-800/50',
          className
        )}
      >
        <Content graphic={graphic} contentClassName={contentClassName}>
          {children}
        </Content>
      </motion.div>
    </Portal>
  );
}
