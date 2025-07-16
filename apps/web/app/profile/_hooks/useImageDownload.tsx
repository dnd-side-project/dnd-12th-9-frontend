'use client';

import { useRef, useState } from 'react';

import { snapdom } from '@zumer/snapdom';
import toast from 'react-hot-toast';

export const useImageDownload = () => {
  const divRef = useRef<HTMLDivElement>(null);

  const [imageLoaded, setImageLoaded] = useState(false);

  const onImageLoaded = () => setImageLoaded(true);
  const [isDownloadImageLoading, setIsDownloadImageLoading] = useState(false);

  const handleDownload = async () => {
    try {
      if (!divRef.current) {
        toast.error('캡처할 요소를 찾을 수 없어요');
        return;
      }

      if (!imageLoaded) {
        toast.error('이미지가 아직 로드되지 않았어요');
        return;
      }

      setIsDownloadImageLoading(true);
      const result = await snapdom(divRef.current, {
        scale: 2,
        backgroundColor: '#ffffff',
        embedFonts: true,
        fast: false, // ios 환경에서 테스트 필요 https://github.com/zumerlab/snapdom/issues/107#issuecomment-3077452800
      });

      await result.download({
        format: 'webp',
        filename: 'PROFILE_CARD',
      });

      toast.success('이미지 저장에 성공했어요');
    } catch (error) {
      console.error('Error converting div to image:', error);
      toast.error('이미지 저장에 실패했어요');
    } finally {
      setIsDownloadImageLoading(false);
    }
  };

  return {
    divRef,
    imageLoaded,
    onImageLoaded,
    isDownloadImageLoading,
    handleDownload,
  };
};
