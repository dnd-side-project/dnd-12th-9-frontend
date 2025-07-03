'use client';
import { useRouter } from 'next/navigation';

import { Suspense } from 'react';

import { useSuspenseQuery } from '@tanstack/react-query';

import { Button } from '@sbooky/ui/components/Button';
import { OrgIcon } from '@sbooky/ui/components/Button/assets/OrbIcon';
import { Icon } from '@sbooky/ui/components/Icon';
import { Flex, HStack, JustifyBetween, Spacing, Stack } from '@sbooky/ui/components/Layout';
import { Text } from '@sbooky/ui/components/Text';
import { bookQueryOptions } from 'app/_api/queries/book';
import { DYNAMIC_ROUTES, ROUTES } from 'app/_constants/route';
import { UserType } from 'app/_util/userType';

type MemberPointInfoProps = {
  memberId: string;
  userType: UserType;
};

export const MemberPointInfo = ({ memberId, userType }: MemberPointInfoProps) => {
  const router = useRouter();

  const isOwner = userType === 'OWNER';

  const { data: bookData } = useSuspenseQuery(
    bookQueryOptions.count({ ownerId: memberId, readStatus: 'COMPLETED' })
  );

  return (
    <Flex className="flex-col gap-3">
      <Stack className="gap-3 rounded-lg bg-white p-4">
        {isOwner && (
          <Suspense
            fallback={
              <>
                <JustifyBetween>
                  <Spacing className="h-5 w-24 bg-gray-200" />
                  <Spacing className="h-5 w-24 bg-gray-200" />
                </JustifyBetween>
                <Spacing className="h-[1px] bg-gray-200" />
              </>
            }
          >
            <PointSection />
          </Suspense>
        )}
        <JustifyBetween>
          <HStack className="items-center gap-2">
            <Text type="Body1" className="text-gray-600">
              지금까지 완독한 책
            </Text>
            <Text type="Heading1" weight="semibold" className="text-gray-900">
              {bookData.data.bookCount ?? 0}권
            </Text>
          </HStack>
          <Button
            size="sm"
            variant="primary50"
            right={<Icon type="next" size={16} color="primary" />}
            onClick={() => router.push(DYNAMIC_ROUTES.BOOK_SHELF(memberId))}
          >
            책장가기
          </Button>
        </JustifyBetween>
      </Stack>
      {isOwner && (
        <Button
          size="lg"
          variant="primary500"
          className="w-full text-white"
          onClick={() => router.push(ROUTES.SEARCH)}
        >
          책 추가하기
        </Button>
      )}
    </Flex>
  );
};

const PointSection = () => {
  const { data } = useSuspenseQuery(bookQueryOptions.point());

  return (
    <>
      <JustifyBetween>
        <HStack className="gap-1">
          <Text type="Body2" className="mr-1 text-gray-600">
            보유 구슬
          </Text>
          <OrgIcon />
          <Text type="Title2" weight="medium" className="text-black">
            {data.data.point ?? 0}
          </Text>
        </HStack>
        <HStack className="gap-1">
          <Text type="Body2" className="text-gray-800">
            뽑기 가능 횟수
          </Text>
          <Text type="Body2" className="text-green-600">
            {data.data.drawCount}회
          </Text>
        </HStack>
      </JustifyBetween>
      <Spacing className="h-[1px] bg-gray-200" />
    </>
  );
};
