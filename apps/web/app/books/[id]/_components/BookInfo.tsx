import Image from 'next/image';

import { Box, CenterStack } from '@sbooky/ui/components/Layout';
import { Text } from '@sbooky/ui/components/Text';
import { MemberBook } from 'app/_api/types/book';

type Props = MemberBook;

export const BookInfo = ({ title, thumbnailUrl, author, publishedAt }: Props) => {
  return (
    <Box className="relative overflow-hidden rounded-lg">
      <Image
        src={thumbnailUrl ?? '/Ghost/BASIC_GHOST.webp'}
        fill
        alt="배경"
        className="rounded-lg object-center"
      />
      <CenterStack className="aspect-square gap-4 bg-black/50 backdrop-blur-xl">
        <Image
          src={thumbnailUrl ?? '/Ghost/BASIC_GHOST.webp'}
          alt="도서"
          width={140}
          height={206}
          className="rounded-[4px]"
        />
        <CenterStack className="max-w-[200px] gap-1">
          <Text type="Heading3" weight="semibold" className="line-clamp-1 text-white">
            {title}
          </Text>
          <Text type="caption" weight="medium" className="line-clamp-1 text-gray-200">
            {author} • {publishedAt}
          </Text>
        </CenterStack>
      </CenterStack>
    </Box>
  );
};
