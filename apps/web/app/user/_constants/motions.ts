export const GHOST_ANIMATION = {
  initial: { opacity: 0, y: 0 },
  animate: {
    opacity: 1,
    y: [-10, 10, 0],
  },
  transition: {
    opacity: { duration: 2 },
    y: {
      duration: 2,
      repeat: Infinity,
      repeatType: 'reverse',
      ease: 'easeInOut',
    },
  },
};
