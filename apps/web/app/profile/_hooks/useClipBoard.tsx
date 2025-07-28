'use client';

import { useCallback, useState } from 'react';

import toast from 'react-hot-toast';

//https://github.com/uidotdev/usehooks/blob/main/index.js#L142
export const useCopyToClipboard = (): [string | null, (value: string) => void] => {
  const [state, setState] = useState<string | null>(null);

  const copyToClipboard = useCallback((value: string) => {
    const handleCopy = async () => {
      try {
        if (navigator?.clipboard?.writeText) {
          await navigator.clipboard.writeText(value);
          setState(value);
        } else {
          throw new Error('writeText not supported');
        }
      } catch {
        oldSchoolCopy(value);
        setState(value);
      } finally {
        toast.success('클립보드에 복사되었습니다');
      }
    };

    handleCopy();
  }, []);

  return [state, copyToClipboard];
};

const oldSchoolCopy = (text: string) => {
  const tempTextArea = document.createElement('textarea');
  tempTextArea.value = text;
  document.body.appendChild(tempTextArea);
  tempTextArea.select();
  document.execCommand('copy');
  document.body.removeChild(tempTextArea);
};
