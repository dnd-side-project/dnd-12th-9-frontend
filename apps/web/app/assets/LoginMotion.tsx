'use client';

import { PropsWithChildren } from 'react';

import * as m from 'motion/react-m';

import { LazyMotion } from 'app/_components/LazyMotion';

export const LoginMotion = ({ children }: PropsWithChildren) => {
  return (
    <LazyMotion>
      <m.div
        animate={{ rotate: [7, -7, 7] }}
        transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
      >
        {children}
      </m.div>
    </LazyMotion>
  );
};
