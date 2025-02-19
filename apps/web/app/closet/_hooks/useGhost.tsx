'use client';

import { useState } from 'react';

import { Ghost } from 'app/_api/types/item';

export const useGhost = (initialGhost: Ghost) => {
  const [currentGhost, setCurrentGhost] = useState<Ghost>(initialGhost);

  const updateCurrentGhost = (ghost: Ghost) => () => setCurrentGhost(ghost);
  const resetGhost = () => setCurrentGhost(initialGhost);

  const isInitialGhost = currentGhost.code === initialGhost.code;

  return {
    currentGhost,
    updateCurrentGhost,
    resetGhost,
    isInitialGhost,
  };
};
