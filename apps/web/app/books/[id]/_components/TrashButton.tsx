'use client';

import { HeaderRightElement } from '@sbooky/ui/components/Header';
import { Icon } from '@sbooky/ui/components/Icon';

export const TrashButton = () => {
  return (
    <HeaderRightElement>
      <Icon type="delete" color="gray800" />
    </HeaderRightElement>
  );
};
