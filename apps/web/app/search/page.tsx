import { Header } from '@repo/ui/components/Header';
import { PageLayout } from '@repo/ui/components/Layout';
import { BackButton } from 'app/_components/BackButton';

import { SearchContent } from './_components/SearchContent';

const SearchPage = () => {
  return (
    <PageLayout
      header={
        <Header left={<BackButton />} className="border-b border-gray-100">
          검색
        </Header>
      }
    >
      <SearchContent />
    </PageLayout>
  );
};

export default SearchPage;
