import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

import { Header } from '@sbooky/ui/components/Header';
import { PageLayout } from '@sbooky/ui/components/Layout';
import { BackButton } from 'app/_components/BackButton';
import { COOKIE_ID } from 'app/_constants/cookie';
import { ROUTES } from 'app/_constants/route';

import { SearchContent } from './_components/SearchContent';

const SearchPage = async () => {
  const cookieStore = await cookies();
  const memberId = cookieStore.get(COOKIE_ID.MEMBER_ID)?.value;

  if (!memberId) {
    redirect(ROUTES.LOGIN);
  }

  return (
    <PageLayout
      header={
        <Header left={<BackButton />} className="bg-white" borderBottom>
          검색
        </Header>
      }
      className="overflow-y-hidden bg-white"
    >
      <SearchContent memberId={memberId} />
    </PageLayout>
  );
};

export default SearchPage;
