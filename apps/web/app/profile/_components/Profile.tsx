'use client';

import { useRouter } from 'next/navigation';

import { useRef, useState } from 'react';

import { useSuspenseQueries } from '@tanstack/react-query';
import { saveAs } from 'file-saver';
import { toPng } from 'html-to-image';
import { toast } from 'react-hot-toast';

import { Header, HeaderLeftElement } from '@sbooky/ui/components/Header';
import { Icon } from '@sbooky/ui/components/Icon';
import { JustifyBetween, PageLayout } from '@sbooky/ui/components/Layout';
import { bookQueryOptions } from 'app/_api/queries/book';
import { itemQueryOptions } from 'app/_api/queries/item';
import { DYNAMIC_ROUTES } from 'app/_constants/route';
import { BASIC_GHOST, GHOST_MAP } from 'app/closet/_constants/item';

import { BottomButton } from './BottomButton';
import { Card } from './Card';

type ProfileProps = {
  memberId: string;
};

export const Profile = ({ memberId }: ProfileProps) => {
  const router = useRouter();

  const divRef = useRef<HTMLDivElement>(null);

  const [imageLoaded, setImageLoaded] = useState(false);

  const onImageLoaded = () => setImageLoaded(true);
  const [isDownloadImageLoading, setIsDownloadImageLoading] = useState(false);

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

  const handleDownload = async () => {
    try {
      if (!divRef.current) {
        return;
      }

      if (!imageLoaded) {
        return;
      }

      setIsDownloadImageLoading(true);
      const dataUrl = await toPng(divRef.current, {
        includeQueryParams: true,
      });

      saveAs(dataUrl, 'GHOST_PROFILE_CARD.png');
      toast.success('이미지 저장에 성공했어요');
    } catch (error) {
      console.error('Error converting div to image:', error);
      toast.error('이미지 저장에 실패했어요');
    } finally {
      setIsDownloadImageLoading(false);
    }
  };

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
        <BottomButton
          saveImageButtonProps={{
            onClick: handleDownload,
            disabled: !imageLoaded || isDownloadImageLoading,
          }}
        />
      </JustifyBetween>
    </PageLayout>
  );
};
