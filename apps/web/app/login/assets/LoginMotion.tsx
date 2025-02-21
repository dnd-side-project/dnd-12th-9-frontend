'use client';
import { PropsWithChildren } from 'react';

import { motion } from 'framer-motion';

export const LoginMotion = ({ children }: PropsWithChildren) => {
  return (
    <motion.div
      animate={{ rotate: [7, -7, 7] }}
      transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
    >
      {children}
    </motion.div>
  );
};
