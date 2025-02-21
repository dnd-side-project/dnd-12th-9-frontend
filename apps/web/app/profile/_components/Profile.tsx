'use client';

import { useRef, useState } from 'react';

import { useQueries } from '@tanstack/react-query';
import { saveAs } from 'file-saver';
import { toPng } from 'html-to-image';

import { Header } from '@repo/ui/components/Header';
import { JustifyBetween, PageLayout } from '@repo/ui/components/Layout';
import { bookQueryOptions } from 'app/_api/queries/book';
import { itemQueryOptions } from 'app/_api/queries/item';
import { BackButton } from 'app/_components/BackButton';
import { BASIC_GHOST, GHOST_MAP } from 'app/closet/_constants/item';

import { BottomButton } from './BottomButton';
import { Card } from './Card';

type ProfileProps = {
  memberId: string;
};

export const Profile = ({ memberId }: ProfileProps) => {
  // TODO: 추후 주석 삭제
  console.log('memberId', memberId);

  const divRef = useRef<HTMLDivElement>(null);

  const [imageLoaded, setImageLoaded] = useState(false);

  const onImageLoaded = () => setImageLoaded(true);

  //TODO 서스펜스쿼리쓰면 무한 로딩걸림.. 해결 필요
  const [
    { data: equippedData, isPending: isEquippedDataPending, isError: isEquippedDataError },
    { data: completedData, isPending: isCompletedDataPending, isError: isCompletedDataError },
  ] = useQueries({
    queries: [itemQueryOptions.equipped(memberId), bookQueryOptions.count(memberId)],
  });

  if (isEquippedDataPending || isCompletedDataPending) {
    return <></>;
  }

  if (isEquippedDataError || isCompletedDataError) {
    return <></>;
  }

  const { completedBookCount } = completedData.data;
  const { findEquippedItemsResponse, nickName } = equippedData.data;
  const { code } = GHOST_MAP[findEquippedItemsResponse.items.CHARACTER[0] ?? BASIC_GHOST.code];

  const handleDownload = async () => {
    try {
      if (!divRef.current) {
        return;
      }

      const dataUrl = await toPng(divRef.current);
      saveAs(dataUrl, 'GHOST_PROFILE_CARD.png');
    } catch (error) {
      console.error('Error converting div to image:', error);
    }
  };

  return (
    <PageLayout
      className="flex h-dvh w-full flex-col bg-white"
      header={
        <Header left={<BackButton />} className="bg-white">
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
        <BottomButton saveImageButtonProps={{ onClick: handleDownload, disabled: !imageLoaded }} />
      </JustifyBetween>
    </PageLayout>
  );
};
