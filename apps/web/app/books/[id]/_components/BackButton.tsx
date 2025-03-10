import Link from 'next/link';

import { HeaderLeftElement } from '@sbooky/ui/components/Header';
import { Icon } from '@sbooky/ui/components/Icon';
import { ROUTES } from 'app/_constants/route';

export const BackButton = () => {
  return (
    <Link href={ROUTES.BOOKS}>
      <HeaderLeftElement>
        <Icon type="back" color="gray800" />
      </HeaderLeftElement>
    </Link>
  );
};
