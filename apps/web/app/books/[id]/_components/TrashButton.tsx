'use client';

import { HeaderRightElement } from '@repo/ui/components/Header';
import { Icon } from '@repo/ui/components/Icon';

export const TrashButton = () => {
  return (
    <HeaderRightElement>
      <Icon type="delete" color="gray800" />
    </HeaderRightElement>
  );
};
