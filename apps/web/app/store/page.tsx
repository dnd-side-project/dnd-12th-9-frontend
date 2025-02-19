import { Header } from '@repo/ui/components/Header';
import { JustifyBetween, PageLayout } from '@repo/ui/components/Layout';
import { BackButton } from 'app/_components/BackButton';

import { ItemBox } from './_components/ItemBox';
import { ItemInfo } from './_components/ItemInfo';

const StorePage = () => {
  return (
    <PageLayout
      className="flex h-dvh w-full flex-col bg-[url('/STORE.png')] bg-cover bg-center"
      header={
        <Header left={<BackButton />} className="bg-[#E8E2D1]">
          스토어
        </Header>
      }
    >
      <JustifyBetween className="mx-4 mb-4 mt-4 flex-1 flex-col">
        <ItemBox />
        <ItemInfo />
      </JustifyBetween>
    </PageLayout>
  );
};

export default StorePage;
