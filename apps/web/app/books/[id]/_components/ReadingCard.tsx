import Image from 'next/image';

import { Chip } from '@repo/ui/components/Chip';
import { Icon } from '@repo/ui/components/Icon';
import { Box, HStack, JustifyBetween, Stack } from '@repo/ui/components/Layout';
import { Text } from '@repo/ui/components/Text';
import { MY_READING_STATUS_TEXT } from 'app/_constants/status';

import { MOCK_TAG } from '../_fixture/hashTag';

import { DialogTrigger } from './DialogTrigger';

export const ReadingCard = () => {
  const bookData = {
    title: '인간실격',
    author: '오늘의 작가',
    publishedAt: '2025.01.14',
    thumbnail: '/images/cover.jpg',
  };

  return (
    <Stack className="gap-5 rounded-lg bg-white px-5 py-4">
      <JustifyBetween className="items-center">
        <HStack className="gap-3">
          <Image
            src={MY_READING_STATUS_TEXT['prev'].image}
            alt="독서 상태"
            width={52}
            height={52}
          />
          <Stack className="gap-0.5">
            <Text type="Title1" weight="semibold" className="text-gray-900">
              {MY_READING_STATUS_TEXT['prev'].text}
            </Text>
            <Text type="Body2" weight="medium" className="text-gray-400">
              2025.01.14
            </Text>
          </Stack>
        </HStack>
        <DialogTrigger data={bookData} />
      </JustifyBetween>
      <Box className="h-[1px] bg-gray-100" />
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
    </Stack>
  );
};
