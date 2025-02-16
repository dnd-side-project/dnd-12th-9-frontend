import Image from 'next/image';

import { Chip } from '@repo/ui/components/Chip';
import { Header } from '@repo/ui/components/Header';
import { Icon } from '@repo/ui/components/Icon';
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

import { DialogTrigger } from './_components/DialogTrigger';
import { TrashButton } from './_components/TrashButton';
import { STATUS_TEXT } from './status';

type BookDetailPageProps = {
  params: Promise<{ id: string }>;
};

const BookDetailPage = async ({ params }: BookDetailPageProps) => {
  const param = await params;

  //TODO params를 이용해서 데이터 조회 eslint 룰 때문에 임시로 작성
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
        <Stack className="gap-5 rounded-lg bg-white px-5 py-4">
          <JustifyBetween className="items-center">
            <HStack className="gap-3">
              <Image src={STATUS_TEXT['prev'].image} alt="독서 상태" width={52} height={52} />
              <Stack className="gap-0.5">
                <Text type="Title1" weight="semibold" className="text-gray-900">
                  {STATUS_TEXT['prev'].text}
                </Text>
                <Text type="Body2" weight="medium" className="text-gray-400">
                  2025.01.14
                </Text>
              </Stack>
            </HStack>
            <DialogTrigger />
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
              {['몰입감 높은', '새로운 지식을 주는', '도파민을 자극하는', '문장이 난해한'].map(
                (text, index) => (
                  <Chip key={index} variant="keyword" active={false} className="gap-1">
                    {text}
                  </Chip>
                )
              )}
            </HStack>
          </Stack>
        </Stack>
      </Stack>
    </PageLayout>
  );
};

export default BookDetailPage;
