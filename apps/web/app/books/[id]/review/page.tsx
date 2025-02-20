import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';

import { Header } from '@repo/ui/components/Header';
import { PageLayout, Stack } from '@repo/ui/components/Layout';
import { Text } from '@repo/ui/components/Text';
import { evaluaionQueryOptions } from 'app/_api/queries/evaluation';
import { BackButton } from 'app/_components/BackButton';

import { ReviewContent } from './_components/ReviewContent';

type Props = {
  params: Promise<{ id: string }>;
};

const queryClient = new QueryClient();

const ReviewPage = async ({ params }: Props) => {
  const param = await params;

  //TODO 추후 getQueryClient util 함수로 교체

  await queryClient.prefetchQuery(evaluaionQueryOptions.list(param.id));

  return (
    <PageLayout
      header={
        <Header left={<BackButton />} className="bg-gray-70">
          평가
        </Header>
      }
      className="bg-gray-70"
    >
      <Stack>
        <ReviewHeader />
        <HydrationBoundary state={dehydrate(queryClient)}>
          <ReviewContent />
        </HydrationBoundary>
      </Stack>
    </PageLayout>
  );
};

const ReviewHeader = () => {
  return (
    <Stack className="gap-2 px-4 py-8">
      <Text className="text-gray-900" type="Heading1" weight="semibold">
        책이 어땠나요?
      </Text>
      <Text className="text-gray-500" type="Body1" weight="medium">
        {`책을 읽고 떠오른 느낌을 키워드로${'\n'} 간단하게 선택해보세요. (최대 6개)`}
      </Text>
    </Stack>
  );
};

export default ReviewPage;
