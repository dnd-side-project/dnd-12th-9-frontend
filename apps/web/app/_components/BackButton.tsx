'use client';

import { useRouter } from 'next/navigation';

import { HeaderLeftElement } from '@sbooky/ui/components/Header';
import { Icon } from '@sbooky/ui/components/Icon';

export const BackButton = () => {
  const router = useRouter();

  const goBack = () => router.back();

  return (
    <HeaderLeftElement onClick={goBack}>
      <Icon type="back" color="gray800" />
    </HeaderLeftElement>
  );
};
