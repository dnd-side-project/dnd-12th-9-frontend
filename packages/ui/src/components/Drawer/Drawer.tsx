import { PropsWithChildren } from 'react';

import * as m from 'motion/react-m';

import { LazyMotion } from '../../../../../apps/web/app/_components/LazyMotion';
import { FADE_IN_ANIMATION, SLIDE_IN_ANIMATION } from '../../lib/motions';
import { Portal } from '../Portal';

type Props = {
  isOpen: boolean;
  onClose: () => void;
} & PropsWithChildren;

export function Drawer({ isOpen, onClose, children }: Props) {
  return (
    <Portal isOpen={isOpen} mode="wait">
      <LazyMotion>
        <m.div
          key="drawer-overlay"
          className="fixed inset-0 bg-black/50"
          initial={FADE_IN_ANIMATION.initial}
          animate={FADE_IN_ANIMATION.animate}
          exit={FADE_IN_ANIMATION.exit}
          onClick={onClose}
        />
        <div
          onClick={onClose}
          className="fixed right-0 top-0 h-full overflow-hidden md:right-[calc((100vw-440px)/2)]"
        >
          <m.div
            className="h-full w-[242px] bg-white shadow-lg"
            initial={SLIDE_IN_ANIMATION.initial}
            animate={SLIDE_IN_ANIMATION.animate}
            exit={SLIDE_IN_ANIMATION.exit}
            transition={SLIDE_IN_ANIMATION.transition}
          >
            {children}
          </m.div>
        </div>
      </LazyMotion>
    </Portal>
  );
}
