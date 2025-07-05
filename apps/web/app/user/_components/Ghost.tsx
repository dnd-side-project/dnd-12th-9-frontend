'use client';
import Image from 'next/image';

import { motion } from 'motion/react';

import { GHOST_ANIMATION } from '../_constants/motions';

type HomeGhostProps = {
  ghost: string;
};
export const Ghost = ({ ghost }: HomeGhostProps) => {
  const ghostImage = `/Ghost/${ghost.toUpperCase()}.webp`;

  return (
    <motion.div
      initial={GHOST_ANIMATION.initial}
      animate={GHOST_ANIMATION.animate}
      transition={GHOST_ANIMATION.transition}
    >
      <Image priority src={ghostImage} alt={ghostImage} width={200} height={200} />
    </motion.div>
  );
};
