import { cookies } from 'next/headers';

import { dehydrate, HydrationBoundary } from '@tanstack/react-query';

import { Header } from '@sbooky/ui/components/Header';
import { PageLayout } from '@sbooky/ui/components/Layout';
import { bookQueryOptions } from 'app/_api/queries/book';
import { BackButton } from 'app/_components/BackButton';
import { COOKIE_ID } from 'app/_constants/cookie';
import { getQueryClient } from 'app/_util/queryClient';

import { DetailSection } from './_components/DetailSection';
import { TrashButton } from './_components/TrashButton';

type BookDetailPageProps = {
  params: Promise<{ id: string }>;
};

const BookDetailPage = async ({ params }: BookDetailPageProps) => {
  const param = await params;
  const cookieStore = await cookies();
  const memberId = cookieStore.get(COOKIE_ID.MEMBER_ID)?.value;

  const queryClient = getQueryClient();

  await queryClient.prefetchQuery(bookQueryOptions.detail(param.id));

  return (
    <PageLayout
      header={
        // TODO 책장 조회 페이지 라우팅 변경으로 books 페이지로 이동하도록 하드 코딩할 수 없어서 일단은 뒤로가기 동작으로 변경
        <Header left={<BackButton />} right={<TrashButton />} borderBottom className="bg-gray-70">
          책 정보
        </Header>
      }
      className="bg-gray-70"
    >
      <HydrationBoundary state={dehydrate(queryClient)}>
        <DetailSection id={param.id} memberId={memberId} />
      </HydrationBoundary>
    </PageLayout>
  );
};

export default BookDetailPage;
