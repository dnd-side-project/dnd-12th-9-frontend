import { Header } from '@repo/ui/components/Header';
import { PageLayout } from '@repo/ui/components/Layout';
import { Text } from '@repo/ui/components/Text';

import { BackButton } from '../_components/BackButton';

import { BookSection } from './_components/BookList';
import { MOCK_BOOK_LIST } from './_fixture/book';

const BookListPage = () => {
  return (
    <PageLayout
      header={
        <Header left={<BackButton />} className="bg-white" borderBottom>
          책장
        </Header>
      }
      className="bg-white"
    >
      <BookListHeader count={MOCK_BOOK_LIST.length} />
      <BookSection />
    </PageLayout>
  );
};

const BookListHeader = ({ count }: { count: number }) => {
  return (
    <div className="gap-2 px-4 py-8">
      <Text type="Heading1" weight="semibold">
        {`책장에 총 ${count}권의 책이${'\n'} 담겨있어요`}
      </Text>
    </div>
  );
};

export default BookListPage;
