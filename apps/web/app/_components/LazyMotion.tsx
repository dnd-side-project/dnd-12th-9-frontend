'use client';

import { PropsWithChildren } from 'react';

import { LazyMotion as FramerLazyMotion } from 'motion/react';

const loadFeatures = () => import('../_util/motionFeatures').then((res) => res.default);

export const LazyMotion = ({ children }: PropsWithChildren) => {
  return (
    <FramerLazyMotion features={loadFeatures} strict>
      {children}
    </FramerLazyMotion>
  );
};
