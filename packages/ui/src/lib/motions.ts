export const FADE_IN_ANIMATION = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

export const SLIDE_IN_ANIMATION = {
  initial: { translateX: '100%' },
  animate: { translateX: 0 },
  exit: { translateX: '100%' },
  transition: { type: 'tween', damping: 50 },
};

export const SCALE_IN_ANIMATION = {
  initial: { scale: 0.95, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  exit: { scale: 0.95, opacity: 0 },
  transition: {
    duration: 0.2,
    ease: [0.39, 0.57, 0.56, 1],
  },
};
