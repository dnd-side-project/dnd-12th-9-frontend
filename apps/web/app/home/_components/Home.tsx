'use client';

import { useRouter, useSearchParams } from 'next/navigation';

import { useEffect } from 'react';

import { useQuery } from '@tanstack/react-query';

import { Header } from '@repo/ui/components/Header';
import { Icon } from '@repo/ui/components/Icon';
import { HStack, JustifyBetween, PageLayout } from '@repo/ui/components/Layout';
import { useModal } from '@repo/ui/hooks/useModal';
import { itemQueryOptions } from 'app/_api/queries/item';

import { TOP_BAR } from '../_constants/topbar';

import { HomeDrawer } from './HomeDrawer';
import { MemberInfo } from './MemberInfo';
import { MemberPointInfo } from './MemberPointInfo';
import { OnBoardingCompleteModal } from './OnBoardingCompleteModal';
import { TopBarButton } from './TopBarButton';

type HomeProps = {
  memberId: string;
};
export const Home = ({ memberId }: HomeProps) => {
  const { isOpen, openModal, closeModal } = useModal();
  const searchParams = useSearchParams();
  const router = useRouter();

  const openOnboarding = searchParams.get('openOnboarding');
  const { data } = useQuery(itemQueryOptions.equipped());

  useEffect(() => {
    if (openOnboarding) {
      router.replace('/home');
    }
  }, [openOnboarding, router]);

  return (
    <>
      <PageLayout
        header={
          <Header
            left={<Icon type="logo" size={80} />}
            right={
              <Icon type="menu" color="gray800" onClick={openModal} className="cursor-pointer" />
            }
            className="inline-flex w-full justify-between bg-[#E8E2D1] px-4"
          >
            {' '}
          </Header>
        }
        className="flex h-dvh w-full flex-col bg-[url('/HOME.webp')] bg-cover bg-center"
      >
        <JustifyBetween className="mb-4 h-full flex-col px-4">
          <HStack className="w-full justify-start gap-2 px-4">
            {Object.keys(TOP_BAR).map((type) => (
              <TopBarButton key={type} type={type as keyof typeof TOP_BAR} />
            ))}
          </HStack>
          <MemberInfo data={data} />
          <MemberPointInfo memberId={memberId} />
        </JustifyBetween>
      </PageLayout>
      <HomeDrawer memberId={memberId} data={data} isOpen={isOpen} onClose={closeModal} />
      <OnBoardingCompleteModal isOnBoardingModalOpen={Boolean(openOnboarding) ?? false} />
    </>
  );
};
