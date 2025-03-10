import Link from 'next/link';

import { Button } from '@sbooky/ui/components/Button';
import { Icon } from '@sbooky/ui/components/Icon';
import { Center, CenterStack, Spacing, VStack } from '@sbooky/ui/components/Layout';
import { Text } from '@sbooky/ui/components/Text';
import { MemberBook } from 'app/_api/types/book';
import { DYNAMIC_ROUTES, ROUTES } from 'app/_constants/route';

import { AddBookCard } from './AddBookCard';
import { Card } from './Card';

type CardListProps = {
  bookList: MemberBook[];
};

export const CardList = ({ bookList }: CardListProps) => {
  const isEmptyCardList = bookList.length === 0;

  return isEmptyCardList ? (
    <Fallback />
  ) : (
    <VStack>
      <Spacing className="h-4" />
      <div className="grid w-full grid-cols-3 place-content-between gap-x-3 gap-y-5">
        <Link href={ROUTES.SEARCH}>
          <AddBookCard />
        </Link>
        {bookList.map(({ id, thumbnailUrl, author, title }) => (
          <Link key={id} href={DYNAMIC_ROUTES.BOOK_DETAIL(id)}>
            <Card
              title={title}
              description={author}
              imageURL={thumbnailUrl ?? '/Ghost/BASIC_GHOST.png'}
            />
          </Link>
        ))}
      </div>
    </VStack>
  );
};

const Fallback = () => {
  return (
    <>
      <Spacing className="h-20" />
      <CenterStack className="grow">
        <Icon type="cryGhost" width={120} height={120} color="gray500" />
        <Spacing className="h-4" />
        <Text className="text-gray-900" weight="semibold" type="Title1">
          책장이 비어 있어요...
        </Text>
        <Spacing className="h-2" />
        <Text className="text-gray-500" weight="medium" type="Body2">
          책을 검색하고 내 책장에 추가해보세요.
        </Text>
        <Spacing className="h-5" />
        <Center className="py-1">
          <Link href={ROUTES.SEARCH}>
            <Button variant="primary50" size="sm">
              등록하기
            </Button>
          </Link>
        </Center>
      </CenterStack>
    </>
  );
};
