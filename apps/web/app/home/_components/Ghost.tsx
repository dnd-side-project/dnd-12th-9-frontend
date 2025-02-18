'use client';
import Image from 'next/image';

import { motion } from 'framer-motion';

import { GHOST_ANIMATION } from '../_constants/motions';

export const Ghost = () => {
  return (
    <motion.div
      initial={GHOST_ANIMATION.initial}
      animate={GHOST_ANIMATION.animate}
      transition={GHOST_ANIMATION.transition}
    >
      <Image priority src="/Ghost/BASIC_GHOST.png" alt="ghost" width={200} height={200} />
    </motion.div>
  );
};
