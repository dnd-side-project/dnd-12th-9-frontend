'use client';
import { PropsWithChildren } from 'react';

import { AnimatePresence, motion } from 'motion/react';

import { TUTORIAL_ANIMATION } from '../constants/motions';

export const Motion = ({ children }: PropsWithChildren) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={TUTORIAL_ANIMATION.initial}
        animate={TUTORIAL_ANIMATION.animate}
        exit={TUTORIAL_ANIMATION.exit}
        transition={TUTORIAL_ANIMATION.transition}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};
