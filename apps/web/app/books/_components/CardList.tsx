import Image from 'next/image';

import { Button } from '@repo/ui/components/Button';
import { Center, CenterStack, Spacing, VStack } from '@repo/ui/components/Layout';
import { Text } from '@repo/ui/components/Text';

import { AddBookCard } from './AddBookCard';
import { Card } from './Card';

type CardListProps = {
  cardList: {
    imageURL: string;
    title: string;
    description: string;
  }[];
};

export const CardList = ({ cardList }: CardListProps) => {
  const isEmptyCardList = cardList.length === 0;

  return isEmptyCardList ? (
    <Fallback />
  ) : (
    <VStack>
      <Spacing className="h-4" />
      <div className="grid w-full grid-cols-3 place-content-between gap-x-3 gap-y-5">
        <AddBookCard />
        {cardList.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </VStack>
  );
};

export const Fallback = () => {
  return (
    <>
      <Spacing className="h-20" />
      <CenterStack className="grow">
        <Image src="/assets/EMPTY_STATE.png" alt="비어있는 책장" width={120} height={120} />
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
          <Button variant="primary50" size="sm">
            등록하기
          </Button>
        </Center>
      </CenterStack>
    </>
  );
};
