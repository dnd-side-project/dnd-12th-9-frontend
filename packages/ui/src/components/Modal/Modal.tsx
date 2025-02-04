import { ComponentProps } from 'react';

import { motion } from 'framer-motion';

import { FADE_IN_ANIMATION } from '@/lib/motions';

import { Portal } from '../Portal';

import { Content } from './ModalContent';

type Props = {
  /**
   * Indicates whether the modal is currently open.
   * @default false
   */
  isOpen: boolean;
  /**
   * optional, can be used to handle modal closing or other actions.
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
} & ComponentProps<'div'>;

export function Modal({ isOpen, onClickOutside, graphic = false, children }: Props) {
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
        className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-50"
      >
        <Content graphic={graphic}>{children}</Content>
      </motion.div>
    </Portal>
  );
}
