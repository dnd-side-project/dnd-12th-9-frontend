import Image from 'next/image';

import { ComponentProps } from 'react';

import { Box, Stack } from '@sbooky/ui/components/Layout';
import { Text } from '@sbooky/ui/components/Text';

import { getImageUrl } from '../_util/image';

type ItemCardProps = {
  name: string;
  code: string;
  active?: boolean;
} & ComponentProps<'div'>;

export const ItemCard = ({ name, code, active = false, ...props }: ItemCardProps) => {
  return (
    <Stack className="cursor-pointer gap-2" {...props}>
      <Box
        className={`flex items-center justify-center rounded-xl bg-gray-100 py-2.5 ${
          active ? 'outline-primary-500 outline outline-[2]' : ''
        }`}
      >
        <Image width={100} height={100} src={getImageUrl(code)} alt={name} />
      </Box>
      <Text weight="semibold" type="Title2" className="break-keep px-2.5 text-center text-gray-700">
        {name}
      </Text>
    </Stack>
  );
};
