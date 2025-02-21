import Image from 'next/image';

import { Box, CenterStack } from '@repo/ui/components/Layout';
import { Text } from '@repo/ui/components/Text';
import { Book } from 'app/_api/types/book';

type Props = Book;

export const BookInfo = ({ title, thumbnail, author, publishedAt }: Props) => {
  return (
    <Box className="relative overflow-hidden rounded-lg">
      <Image
        src={thumbnail ?? '/Ghost/BASIC_GHOST.png'}
        fill
        alt="배경"
        className="rounded-lg object-center"
      />
      <CenterStack className="aspect-square gap-4 bg-black/50 backdrop-blur-xl">
        <Image
          src={thumbnail ?? '/Ghost/BASIC_GHOST.png'}
          alt="도서"
          width={140}
          height={206}
          className="rounded-[4px]"
        />
        <CenterStack className="gap-1">
          <Text type="Heading3" weight="semibold" className="text-white">
            {title}
          </Text>
          <Text type="caption" weight="medium" className="text-gray-200">
            {author} • {publishedAt}
          </Text>
        </CenterStack>
      </CenterStack>
    </Box>
  );
};
