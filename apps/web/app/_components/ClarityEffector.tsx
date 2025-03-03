'use client';

import { useEffect } from 'react';

import Clarity from '@microsoft/clarity';

const CLARITY_PROJECT_ID = process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID ?? '';

export const ClarityEffector = () => {
  useEffect(() => {
    if (process.env.NODE_ENV === 'production' && CLARITY_PROJECT_ID.length !== 0) {
      Clarity.init(CLARITY_PROJECT_ID);
    }
  }, []);
  return null;
};
