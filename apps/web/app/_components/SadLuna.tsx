import Image from 'next/image';

import { motion } from 'motion/react';

import { Box } from '@sbooky/ui/components/Layout';

const TEARS_ANIMATION = {
  initial: { y: 0 },
  animate: {
    y: [0, 10, 0],
    transition: {
      repeat: Infinity,
      duration: 2,
      ease: 'easeInOut',
    },
  },
};

export const SadLuna = () => {
  return (
    <Box className="relative">
      <Image
        src="/Ghost/SAD_LUNA_NOTEARS.webp"
        alt="luna"
        width="150"
        height="150"
        className="relative"
      />
      <motion.div
        initial={TEARS_ANIMATION.initial}
        animate={TEARS_ANIMATION.animate}
        className="absolute left-0 top-0 z-10"
      >
        <Image src="/Ghost/TEARS.webp" alt="tears" width="150" height="150" />
      </motion.div>
    </Box>
  );
};
