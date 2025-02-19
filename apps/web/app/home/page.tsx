'use client';
import { useState } from 'react';

import { Button } from '@repo/ui/components/Button';
import { Header } from '@repo/ui/components/Header';
import { Icon } from '@repo/ui/components/Icon';
import { CenterStack, Flex, HStack, JustifyBetween, PageLayout } from '@repo/ui/components/Layout';

import { Bubble } from './_components/Bubble';
import { Ghost } from './_components/Ghost';
import { HomeDrawer } from './_components/HomeDrawer';
import { Summary } from './_components/Summary';
import { TopBarButton } from './_components/TopBarButton';
import { TOP_BAR } from './_constants/topbar';

const HomePage = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <>
      <PageLayout
        header={
          <Header
            left={<Icon type="logo" size={80} />}
            right={
              <Icon
                type="menu"
                color="gray800"
                onClick={() => setIsOpen(!isOpen)}
                className="cursor-pointer"
              />
            }
            className="inline-flex w-full justify-between bg-[#E8E2D1] px-4"
          >
            {' '}
          </Header>
        }
        className="flex h-dvh w-full flex-col overflow-hidden bg-[url('/HOME.png')] bg-cover bg-center"
      >
        <JustifyBetween className="mb-4 h-dvh flex-col px-4">
          <HStack className="w-full justify-start gap-2 px-4">
            {Object.keys(TOP_BAR).map((type) => (
              <TopBarButton key={type} type={type as keyof typeof TOP_BAR} />
            ))}
          </HStack>
          <CenterStack>
            <Bubble nickName="김민수" like={10} />
            <Ghost />
          </CenterStack>
          <Flex className="flex-col gap-3">
            <Summary orbCount={0} tryAvailable={0} totalBookCount={0} />
            <Button size="lg" variant="primary500" className="w-full">
              책 추가하기
            </Button>
          </Flex>
        </JustifyBetween>
      </PageLayout>
      <HomeDrawer isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};

export default HomePage;
