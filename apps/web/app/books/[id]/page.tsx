import { Header } from '@repo/ui/components/Header';
import { PageLayout, Spacing, Stack } from '@repo/ui/components/Layout';
import { Text } from '@repo/ui/components/Text';
import { BackButton } from 'app/_components/BackButton';

import { BookInfo } from './_components/BookInfo';
import { ReadingCard } from './_components/ReadingCard';
import { TrashButton } from './_components/TrashButton';

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
      <Stack className="p-4">
        <BookInfo />
        <Spacing className="h-8" />
        <Text weight="semibold" type="Heading1">
          내 독서
        </Text>
        <Spacing className="h-3" />
        <ReadingCard />
      </Stack>
    </PageLayout>
  );
};

export default BookDetailPage;
