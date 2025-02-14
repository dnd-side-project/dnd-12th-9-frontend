import Image from 'next/image';

import { Box, Stack } from '@repo/ui/components/Layout';
import { Text } from '@repo/ui/components/Text';

type CardProps = {
  imageURL: string;
  title: string;
  description: string;
};

export const Card = ({ imageURL, title, description }: CardProps) => {
  return (
    <Stack className="h-[204px] w-[106px] gap-1">
      <Box className="border-gray-70 aspect-1 relative h-[156px] rounded-lg border">
        <Image src={imageURL} alt={title} fill className="border-gray-70 rounded-lg border" />
      </Box>
      <Stack className="gap-0.5">
        <Text type="Title2" weight="medium" className="text-gray-900">
          {title}
        </Text>
        <Text type="Title2" weight="medium" className="text-gray-400">
          {description}
        </Text>
      </Stack>
    </Stack>
  );
};
