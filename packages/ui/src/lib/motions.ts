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
