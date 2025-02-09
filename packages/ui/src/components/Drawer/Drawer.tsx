import { PropsWithChildren } from 'react';

import { motion } from 'framer-motion';

import { FADE_IN_ANIMATION, SLIDE_IN_ANIMATION } from '@/lib/motions';

import { Portal } from '../Portal';

type Props = {
  isOpen: boolean;
  onClose: () => void;
} & PropsWithChildren;

export function Drawer({ isOpen, onClose, children }: Props) {
  return (
    <Portal isOpen={isOpen} mode="wait">
      <motion.div
        key="drawer-overlay"
        className="fixed inset-0 bg-black/50"
        initial={FADE_IN_ANIMATION.initial}
        animate={FADE_IN_ANIMATION.animate}
        exit={FADE_IN_ANIMATION.exit}
        onClick={onClose}
      />
      <div
        onClick={onClose}
        className="fixed right-0 top-0 h-full overflow-hidden md:right-[calc((100vw-375px)/2)]"
      >
        <motion.div
          className="h-full w-[242px] bg-white shadow-lg"
          initial={SLIDE_IN_ANIMATION.initial}
          animate={SLIDE_IN_ANIMATION.animate}
          exit={SLIDE_IN_ANIMATION.exit}
          transition={SLIDE_IN_ANIMATION.transition}
        >
          {children}
        </motion.div>
      </div>
    </Portal>
  );
}
