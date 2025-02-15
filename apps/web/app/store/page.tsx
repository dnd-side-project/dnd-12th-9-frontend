import { Button, ButtonElement } from '@repo/ui/components/Button';
import { Header } from '@repo/ui/components/Header';
import { Flex, JustifyBetween, PageLayout } from '@repo/ui/components/Layout';
import { BackButton } from 'app/_components/BackButton';

import { ItemBox } from './_components/ItemBox';
import { StoreCard } from './_components/StoreCard';

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
      <JustifyBetween className="mx-4 mb-[10px] mt-4 flex-1 flex-col">
        <ItemBox />
        <Flex className="flex-col gap-3">
          <StoreCard count={0} tryAvailable={0} />
          <Button
            size="lg"
            variant="gray200"
            className="w-full"
            right={<ButtonElement count={100} />}
            disabled
          >
            아이템 뽑기
          </Button>
        </Flex>
      </JustifyBetween>
    </PageLayout>
  );
};

export default StorePage;
