import Image from 'next/image';

import { Box, CenterStack } from '@repo/ui/components/Layout';
import { Text } from '@repo/ui/components/Text';

export const BookInfo = () => {
  return (
    <Box className="relative overflow-hidden rounded-lg">
      <Image
        src="https://picsum.photos/200/300?random=3"
        fill
        alt="배경"
        className="rounded-lg object-center"
      />
      <CenterStack className="aspect-square gap-4 bg-black/50 backdrop-blur-xl">
        <Image
          src="https://picsum.photos/200/300?random=5"
          alt="도서"
          width={140}
          height={206}
          className="rounded-[4px]"
        />
        <CenterStack className="gap-1">
          <Text type="Heading3" weight="semibold" className="text-white">
            인간실격
          </Text>
          <Text type="caption" weight="medium" className="text-gray-200">
            디자이 오사무 • 2012
          </Text>
        </CenterStack>
      </CenterStack>
    </Box>
  );
};
