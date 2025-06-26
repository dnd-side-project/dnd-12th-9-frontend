'use client';

import { PropsWithChildren } from 'react';

import { AnimatePresence } from 'motion/react';
import * as m from 'motion/react-m';

import { LazyMotion } from 'app/_components/LazyMotion';

import { TUTORIAL_ANIMATION } from '../constants/motions';

export const Motion = ({ children }: PropsWithChildren) => {
  return (
    <AnimatePresence mode="wait">
      <LazyMotion>
        <m.div
          initial={TUTORIAL_ANIMATION.initial}
          animate={TUTORIAL_ANIMATION.animate}
          exit={TUTORIAL_ANIMATION.exit}
          transition={TUTORIAL_ANIMATION.transition}
        >
          {children}
        </m.div>
      </LazyMotion>
    </AnimatePresence>
  );
};
