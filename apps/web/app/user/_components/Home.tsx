'use client';

import { useRouter, useSearchParams } from 'next/navigation';

import { Suspense, useEffect } from 'react';

import { useQuery } from '@tanstack/react-query';

import { Header } from '@sbooky/ui/components/Header';
import { Icon } from '@sbooky/ui/components/Icon';
import { HStack, JustifyBetween, PageLayout } from '@sbooky/ui/components/Layout';
import { useModal } from '@sbooky/ui/hooks/useModal';
import { itemQueryOptions } from 'app/_api/queries/item';
import { DYNAMIC_ROUTES, ROUTES } from 'app/_constants/route';
import { keys } from 'app/_util/keys';
import { UserType } from 'app/_util/userType';

import { TOP_BAR } from '../_constants/topbar';

import { LoginAlertModal } from './LoginAlertModal';
import { MemberInfo } from './MemberInfo';
import { MemberPointInfo } from './MemberPointInfo';
import { OnBoardingCompleteModal } from './OnBoardingCompleteModal';
import { TopBarButton } from './TopBarButton';

type HomeProps = {
  memberId: string;
  userType: UserType;
};

export const Home = ({ memberId, userType }: HomeProps) => {
  const {
    isOpen: isLoginAlertOpen,
    openModal: openLoginAlertModal,
    closeModal: closeLoginAlertModal,
  } = useModal();

  const searchParams = useSearchParams();
  const router = useRouter();

  const openOnboarding = searchParams.get('openOnboarding');
  const { data } = useQuery(itemQueryOptions.equipped());

  useEffect(() => {
    if (openOnboarding) {
      router.replace(DYNAMIC_ROUTES.USER(memberId));
    }
  }, [openOnboarding, router, memberId]);

  const isGuset = userType === 'GUEST';
  const goSettingPage = () => router.push(ROUTES.SETTING);

  const onClickSetting = () => {
    if (isGuset) {
      openLoginAlertModal();
    } else {
      goSettingPage();
    }
  };

  return (
    <>
      <PageLayout
        header={
          <Header
            left={<Icon type="logo" size={80} />}
            right={
              <Icon
                type="setting"
                color="gray800"
                onClick={onClickSetting}
                className="cursor-pointer"
              />
            }
            className="inline-flex w-full justify-between bg-[#E8E2D1] px-4"
          />
        }
        className="flex h-dvh w-full flex-col bg-[url('/HOME.webp')] bg-cover bg-center"
      >
        <JustifyBetween className="mb-4 h-full flex-col px-4">
          <HStack className="w-full justify-start gap-2 px-4">
            {keys(TOP_BAR).map((type) => (
              <TopBarButton key={type} type={type} />
            ))}
          </HStack>
          <MemberInfo data={data} />
          <Suspense>
            <MemberPointInfo memberId={memberId} userType={userType} />
          </Suspense>
        </JustifyBetween>
      </PageLayout>
      <OnBoardingCompleteModal isOnBoardingModalOpen={Boolean(openOnboarding) ?? false} />
      <LoginAlertModal isOpen={isLoginAlertOpen} closeModal={closeLoginAlertModal} />
    </>
  );
};
