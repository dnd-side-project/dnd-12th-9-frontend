import Image from 'next/image';

import { Button } from '@repo/ui/components/Button';
import { Flex } from '@repo/ui/components/Layout';
import { Text } from '@repo/ui/components/Text';

import { Book } from '../types/book';

export type BookWithModal = Book & { openModal: () => void };
export const BookCard = ({ title, authors, publishedAt, thumbnail, openModal }: BookWithModal) => {
  return (
    <Flex className="my-2 w-full flex-row items-center justify-between">
      <Flex className="flex-row items-center gap-4">
        <Image src={thumbnail} alt="도서 검색 결과" width={72} height={110} />
        <Flex className="flex-col">
          <Text type="Title2" className="text-gray-900">
            {title}
          </Text>
          <Flex className="text-gray-600">
            <Text type="Body2">{authors}</Text>
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
