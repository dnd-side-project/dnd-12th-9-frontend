import { Button } from '@repo/ui/components/Button';
import { Chip } from '@repo/ui/components/Chip';
import { Icon } from '@repo/ui/components/Icon';
import { Box, CenterStack, HStack, Spacing, Stack } from '@repo/ui/components/Layout';
import { Text } from '@repo/ui/components/Text';

import { MOCK_TAG } from '../_fixture/hashTag';

export const KeywordSection = () => {
  return (
    <>
      <Box className="h-[1px] bg-gray-100" />
      <EmptyReview />
      <Stack className="gap-4">
        <HStack className="gap-2">
          <Text type="Title1" weight="semibold" className="text-gray-600">
            내 평가
          </Text>
          <Icon type="squarePen" />
        </HStack>
        <HStack className="flex-wrap gap-x-3 gap-y-2.5">
          {MOCK_TAG.map((text, index) => (
            <Chip key={index} variant="keyword" active={false} className="gap-1">
              {text}
            </Chip>
          ))}
        </HStack>
      </Stack>
    </>
  );
};

const EmptyReview = () => {
  return (
    <CenterStack className="py-2">
      <Text type="Title1" weight="semibold" className="text-gray-900">
        아직 평가를 하지 않았어요.
      </Text>
      <Spacing className="h-2" />
      <Text type="Body2" weight="medium" className="text-gray-500">
        완독한 책을 평가하고 구슬을 받으세요.
      </Text>
      <Spacing className="h-4" />
      <Button className="my-1">평가하기</Button>
    </CenterStack>
  );
};
