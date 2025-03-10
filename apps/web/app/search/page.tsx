import { Header } from '@sbooky/ui/components/Header';
import { PageLayout } from '@sbooky/ui/components/Layout';
import { BackButton } from 'app/_components/BackButton';

import { SearchContent } from './_components/SearchContent';

const SearchPage = () => {
  return (
    <PageLayout
      header={
        <Header left={<BackButton />} className="bg-white" borderBottom>
          검색
        </Header>
      }
      className="overflow-y-hidden bg-white"
    >
      <SearchContent />
    </PageLayout>
  );
};

export default SearchPage;
