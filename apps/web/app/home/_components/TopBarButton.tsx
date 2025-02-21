'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { CenterStack } from '@repo/ui/components/Layout';
import { Text } from '@repo/ui/components/Text';

import { TOP_BAR } from '../_constants/topbar';

type TopBarButtonProps = {
  type: keyof typeof TOP_BAR;
};

export const TopBarButton = ({ type }: TopBarButtonProps) => {
  const router = useRouter();
  const { icon, title, router: path } = TOP_BAR[type];

  const handleClick = () => {
    router.push(path);
  };

  return (
    <CenterStack className="mt-2 cursor-pointer gap-2" onClick={handleClick}>
      <Image src={icon} alt={title} width={48} height={48} />
      <Text type="Title2" weight="semibold" className="text-gray-900">
        {title}
      </Text>
    </CenterStack>
  );
};
