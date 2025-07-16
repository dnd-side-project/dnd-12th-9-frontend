'use client';

import { useRouter } from 'next/navigation';

import { ComponentProps } from 'react';

import { useSuspenseQueries } from '@tanstack/react-query';

import { Header, HeaderLeftElement } from '@sbooky/ui/components/Header';
import { Icon } from '@sbooky/ui/components/Icon';
import { IconType } from '@sbooky/ui/components/Icon/assets';
import { Center, JustifyBetween, PageLayout } from '@sbooky/ui/components/Layout';
import { bookQueryOptions } from 'app/_api/queries/book';
import { itemQueryOptions } from 'app/_api/queries/item';
import { DYNAMIC_ROUTES } from 'app/_constants/route';
import { BASIC_GHOST, GHOST_MAP } from 'app/closet/_constants/item';

import { useCopyToClipboard } from '../_hooks/useClipBoard';
import { useImageDownload } from '../_hooks/useImageDownload';

import { BottomButton } from './BottomButton';
import { Card } from './Card';

type ProfileProps = {
  memberId: string;
};

export const Profile = ({ memberId }: ProfileProps) => {
  const router = useRouter();

  const { divRef, handleDownload, imageLoaded, onImageLoaded, isDownloadImageLoading } =
    useImageDownload();

  const [, copyToClipboard] = useCopyToClipboard();

  const shareURL = `https://www.sbooky.net/user/${memberId}`;

  const shareKakao = () => {
    window.Kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title: '스부키와 함께하는 독서의 순간',
        imageUrl: 'https://www.sbooky.net/MAIN.png',
        link: {
          mobileWebUrl: shareURL,
          webUrl: shareURL,
        },
      },
      buttons: [
        {
          title: '스부키 방문하기',
          link: {
            mobileWebUrl: shareURL,
            webUrl: shareURL,
          },
        },
      ],
    });
  };

  const PROFILE_BOTTOM_BUTTON = [
    {
      name: '저장하기',
      icon: 'download',
      onClick: handleDownload,
      disabled: !imageLoaded || isDownloadImageLoading,
    },
    {
      name: '카카오톡',
      icon: 'kakao',
      onClick: shareKakao,
    },
    {
      name: '링크복사',
      icon: 'link',
      onClick: () => copyToClipboard(shareURL),
    },
  ] satisfies Array<
    {
      name: string;
      icon: IconType;
    } & ComponentProps<'button'>
  >;

  const [
    { data: equippedData, isPending: isEquippedDataPending, isError: isEquippedDataError },
    { data: completedData, isPending: isCompletedDataPending, isError: isCompletedDataError },
  ] = useSuspenseQueries({
    queries: [
      itemQueryOptions.equipped(memberId),
      bookQueryOptions.count({ ownerId: memberId, readStatus: 'COMPLETED' }),
    ],
  });

  if (isEquippedDataPending || isCompletedDataPending) {
    return <></>;
  }

  if (isEquippedDataError || isCompletedDataError) {
    return <></>;
  }

  const { bookCount: completedBookCount } = completedData.data;
  const { findEquippedItemsResponse, nickName } = equippedData.data;
  const { code } = GHOST_MAP[findEquippedItemsResponse.items.CHARACTER[0] ?? BASIC_GHOST.code];

  const goBack = () => {
    router.push(DYNAMIC_ROUTES.USER(memberId));
  };

  return (
    <PageLayout
      className="bg-gray-70 flex h-dvh w-full flex-col"
      header={
        <Header
          left={
            <HeaderLeftElement onClick={goBack}>
              <Icon type="back" color="gray800" />
            </HeaderLeftElement>
          }
          className="bg-gray-70"
        >
          자랑하기
        </Header>
      }
    >
      <JustifyBetween className="mx-11 mt-8 flex-col gap-10">
        <Card
          ref={divRef}
          onImageLoaded={onImageLoaded}
          nickName={nickName}
          code={code}
          completedBookCount={completedBookCount}
        />
        <Center className="gap-12 px-4 pb-4">
          {PROFILE_BOTTOM_BUTTON.map((button) => (
            <BottomButton key={button.name} {...button} />
          ))}
        </Center>
      </JustifyBetween>
    </PageLayout>
  );
};
