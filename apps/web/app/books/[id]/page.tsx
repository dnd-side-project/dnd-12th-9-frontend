import { dehydrate, HydrationBoundary } from '@tanstack/react-query';

import { Header } from '@sbooky/ui/components/Header';
import { PageLayout } from '@sbooky/ui/components/Layout';
import { bookQueryOptions } from 'app/_api/queries/book';
import { getQueryClient } from 'app/_util/queryClient';

import { BackButton } from './_components/BackButton';
import { DetailSection } from './_components/DetailSection';
import { TrashButton } from './_components/TrashButton';

type BookDetailPageProps = {
  params: Promise<{ id: string }>;
};

const BookDetailPage = async ({ params }: BookDetailPageProps) => {
  const param = await params;

  //TODO params를 이용해서 데이터 조회 eslint 룰 때문에 임시로 작성
  console.log(param.id);

  const queryClient = getQueryClient();

  await queryClient.prefetchQuery(bookQueryOptions.detail(param.id));

  return (
    <PageLayout
      header={
        <Header left={<BackButton />} right={<TrashButton />} borderBottom className="bg-gray-70">
          책 정보
        </Header>
      }
      className="bg-gray-70"
    >
      <HydrationBoundary state={dehydrate(queryClient)}>
        <DetailSection id={param.id} />
      </HydrationBoundary>
    </PageLayout>
  );
};

export default BookDetailPage;
