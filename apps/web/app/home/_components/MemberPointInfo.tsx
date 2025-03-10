'use client';
import { useRouter } from 'next/navigation';

import { useQuery } from '@tanstack/react-query';

import { Button } from '@sbooky/ui/components/Button';
import { OrgIcon } from '@sbooky/ui/components/Button/assets/OrbIcon';
import { Icon } from '@sbooky/ui/components/Icon';
import { Box, Flex, HStack, JustifyBetween, Spacing } from '@sbooky/ui/components/Layout';
import { Text } from '@sbooky/ui/components/Text';
import { bookQueryOptions } from 'app/_api/queries/book';
import { ROUTES } from 'app/_constants/route';

type MemberPointInfoProps = {
  memberId: string;
};

export const MemberPointInfo = ({ memberId }: MemberPointInfoProps) => {
  const router = useRouter();

  // TODO : useSuspenseQueries 변경
  const { data } = useQuery(bookQueryOptions.point());
  const { data: bookData } = useQuery(bookQueryOptions.count(memberId));

  return (
    <Flex className="flex-col gap-3">
      <Box className="flex-col gap-3 rounded-lg bg-white px-4 pt-4">
        <JustifyBetween className="pb-3">
          <HStack className="items-center gap-1">
            <Text type="Body2" className="mr-1 text-gray-600">
              보유 구슬
            </Text>
            <OrgIcon />
            <Text type="Title2" weight="medium" className="text-black">
              {data?.data.point ?? 0}
            </Text>
          </HStack>
          <Flex className="gap-1">
            <Text type="Body2" className="text-gray-800">
              뽑기 가능 횟수
            </Text>
            <Text type="Body2" className="text-green-600">
              {data?.data.drawCount}회
            </Text>
          </Flex>
        </JustifyBetween>
        <Spacing className="h-[1px] bg-gray-200" />
        <JustifyBetween className="pb-3 pt-3">
          <HStack className="items-center gap-2">
            <Text type="Body1" className="text-gray-600">
              지금까지 완독한 책
            </Text>
            <Text type="Heading1" weight="semibold" className="text-gray-900">
              {bookData?.data.completedBookCount}권
            </Text>
          </HStack>
          <Button
            size="sm"
            variant="primary50"
            right={<Icon type="next" size={16} color="primary" />}
            onClick={() => router.push(ROUTES.BOOKS)}
          >
            책장가기
          </Button>
        </JustifyBetween>
      </Box>
      <Button
        size="lg"
        variant="primary500"
        className="w-full text-white"
        onClick={() => router.push(ROUTES.SEARCH)}
      >
        책 추가하기
      </Button>
    </Flex>
  );
};
