import Image from 'next/image';

import { Button } from '@repo/ui/components/Button';
import { Header } from '@repo/ui/components/Header';
import {
  Box,
  CenterStack,
  HStack,
  JustifyBetween,
  PageLayout,
  Spacing,
  Stack,
} from '@repo/ui/components/Layout';
import { Text } from '@repo/ui/components/Text';
import { BackButton } from 'app/_components/BackButton';

import { TrashButton } from './_components/TrashButton';

type BookDetailPageProps = {
  params: Promise<{ id: string }>;
};

const BookDetailPage = async ({ params }: BookDetailPageProps) => {
  const param = await params;

  console.log(param);

  return (
    <PageLayout
      header={
        <Header left={<BackButton />} right={<TrashButton />} borderBottom className="bg-gray-70">
          책 정보
        </Header>
      }
      className="bg-gray-70"
    >
      <Stack className="relative p-4">
        <Box className="relative overflow-hidden rounded-lg">
          <Image
            src="https://picsum.photos/200/300?random=3"
            fill
            alt="배경"
            className="rounded-lg object-center"
          />
          <CenterStack className="aspect-square gap-4 bg-black/50 backdrop-blur-xl">
            <Image
              src="https://picsum.photos/200/300?random=5"
              alt="도서"
              width={140}
              height={206}
              className="rounded-[4px]"
            />
            <CenterStack className="gap-1">
              <Text type="Heading3" weight="semibold" className="text-white">
                인간실격
              </Text>
              <Text type="caption" weight="medium" className="text-gray-200">
                디자이 오사무 • 2012
              </Text>
            </CenterStack>
          </CenterStack>
        </Box>
        <Spacing className="h-8" />
        <Text weight="semibold" type="Heading1">
          내 독서
        </Text>
        <Spacing className="h-3" />
        <Stack className="bg-white px-4 py-3">
          <JustifyBetween className="items-center">
            <HStack className="gap-3">
              <div className="size-[52px] bg-gray-200" />
              <Text type="Title1" weight="semibold">
                읽기 전이에요{' '}
              </Text>
            </HStack>
            <Button size="sm" variant="primary50">
              변경하기{' '}
            </Button>
          </JustifyBetween>
        </Stack>
      </Stack>
    </PageLayout>
  );
};

export default BookDetailPage;
