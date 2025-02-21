import Image from 'next/image';

import { Button } from '@repo/ui/components/Button';
import { Flex, Spacing } from '@repo/ui/components/Layout';
import { Text } from '@repo/ui/components/Text';
import { Book } from 'app/_api/types/book';

export type BookWithModal = Book & { openModal: () => void };
export const BookCard = ({ title, author, publishedAt, thumbnail, openModal }: BookWithModal) => {
  const IMAGE = '/BASIC_GHOST.png';
  return (
    <Flex className="my-2 w-full flex-row items-center justify-between">
      <Flex className="flex-row items-center gap-4">
        <Image
          src={thumbnail || IMAGE}
          alt="도서 검색 결과"
          width={72}
          height={110}
          className="h-[110px] w-[72px] object-contain"
        />
        <Flex className="w-full max-w-40 flex-col md:max-w-[220px]">
          <Text type="Title2" className="text-gray-900">
            {title}
          </Text>
          <Spacing className="h-1" />
          <Flex className="text-gray-600">
            <Text type="Body2" className="line-clamp-1 max-w-16 md:max-w-24">
              {author}
            </Text>
            <Text type="Body2">・</Text>
            <Text type="Body2">{publishedAt}</Text>
          </Flex>
        </Flex>
      </Flex>
      <Button size="sm" variant="primary50" onClick={openModal}>
        등록하기
      </Button>
    </Flex>
  );
};
