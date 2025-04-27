import Image from 'next/image';

import { Box, Stack } from '@sbooky/ui/components/Layout';
import { Text } from '@sbooky/ui/components/Text';

type CardProps = {
  imageURL: string;
  title: string;
  description: string;
};

export const Card = ({ imageURL, title, description }: CardProps) => {
  const IMAGE = '/Ghost/BASIC_GHOST.webp';

  return (
    <Stack className="h-[204px] w-[106px] gap-1">
      <Box className="border-gray-70 relative rounded-lg border">
        <Image
          src={imageURL || IMAGE}
          width={106}
          height={156}
          priority
          alt={title}
          className="border-gray-70 h-[156px] rounded-lg border object-cover"
        />
      </Box>
      <Stack className="gap-0.5">
        <Text type="Title2" weight="medium" className="line-clamp-2 text-gray-900">
          {title}
        </Text>
        <Text type="Title2" weight="medium" className="line-clamp-1 text-gray-400">
          {description}
        </Text>
      </Stack>
    </Stack>
  );
};
