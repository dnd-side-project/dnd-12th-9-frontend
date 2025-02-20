import { ALL_GHOSTS } from './ghost';

export const SLIDER_ANIMATION = {
  initial: { x: 0 },
  animate: { x: [0, -ALL_GHOSTS.length * 60] },
  transition: {
    repeat: Infinity,
    duration: 10,
    ease: 'linear',
  },
};
