'use client';

import Image from 'next/image';

import { motion } from 'motion/react';

import { Box, JustifyBetween } from '@sbooky/ui/components/Layout';
import { Text } from '@sbooky/ui/components/Text';

import { ALL_GHOSTS } from '../constants/ghost';
import { SLIDER_ANIMATION } from '../constants/motions';

export const ItemBox = () => {
  return (
    <JustifyBetween className="h-[158px] w-full flex-col items-center rounded-lg bg-white/30">
      <Text type="Title1" weight="semibold" className="mt-6 text-gray-800">
        멋진 아이템이 기다리고 있어요!
      </Text>
      <Box className="relative mb-6 h-[70px] w-full overflow-hidden">
        <motion.div
          initial={SLIDER_ANIMATION.initial}
          animate={SLIDER_ANIMATION.animate}
          transition={SLIDER_ANIMATION.transition}
          className="relative flex items-center gap-5"
        >
          {[...ALL_GHOSTS, ...ALL_GHOSTS].map((ghost, index) => (
            <Image
              key={index}
              src={`/Ghost/${ghost}.webp`}
              alt="BASIC_GHOST"
              width={60}
              height={60}
              className="object-contain"
            />
          ))}
        </motion.div>
      </Box>
    </JustifyBetween>
  );
};
