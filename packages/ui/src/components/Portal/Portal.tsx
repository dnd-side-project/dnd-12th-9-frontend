import { PropsWithChildren, useEffect, useState } from 'react';

import { AnimatePresence } from 'motion/react';
import { createPortal } from 'react-dom';

export function PortalWrapper({ children }: PropsWithChildren) {
  const [container, setContainer] = useState<Element | null>(null);

  useEffect(() => {
    setContainer(document.body);
  }, []);

  if (!container) return null;

  return createPortal(<>{children}</>, container);
}

type Props = {
  /**
   * Indicates whether the modal is currently open.
   * @default false
   */
  isOpen: boolean;
  /**
   * The content to render within the portal.
   *  @default 'wait'
   */
  mode?: 'wait' | 'sync' | 'popLayout';
};

export function Portal({ isOpen, mode = 'wait', children }: PropsWithChildren<Props>) {
  return (
    <PortalWrapper>
      <AnimatePresence mode={mode}>{isOpen && children}</AnimatePresence>
    </PortalWrapper>
  );
}
