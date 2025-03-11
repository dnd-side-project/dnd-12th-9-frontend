'use client';

import { useRouter } from 'next/navigation';

import { useState } from 'react';

import { useQuery } from '@tanstack/react-query';
import { toast } from 'sonner';

import { Button, ButtonElement } from '@sbooky/ui/components/Button';
import { Flex } from '@sbooky/ui/components/Layout';
import { useModal } from '@sbooky/ui/hooks/useModal';
import { useItemDraw } from 'app/_api/mutations/useItemDraw';
import { bookQueryOptions } from 'app/_api/queries/book';
import { Item, ItemDrawResponse } from 'app/_api/types/draw';
import { ItemModal } from 'app/_components/ItemModal';
import { ROUTES } from 'app/_constants/route';

import { StoreCard } from './StoreCard';

export const ItemInfo = () => {
  const router = useRouter();
  const { data } = useQuery(bookQueryOptions.point());
  const [itemData, setItemData] = useState<Item>({
    name: '',
    code: '',
    message: '',
  });
  const { isOpen, openModal, closeModal } = useModal();
  const mutation = useItemDraw();

  const handleItemDraw = () => {
    mutation.mutate(undefined, {
      onSuccess: (response: ItemDrawResponse) => {
        toast.success(`유령 획득에 성공했어요`);
        setItemData(response.data);
        openModal();
      },
      // TODO: 에러 처리
      onError: () => toast.error(`유령 획득에 실패했어요`),
    });
  };
  return (
    <>
      <Flex className="flex-col gap-3">
        <StoreCard drawCount={data?.data.point ?? 0} drawPoint={data?.data.drawCount ?? 0} />
        <Button
          size="lg"
          variant="primary500"
          className="w-full"
          right={<ButtonElement count={data?.data.drawPoint ?? 0} />}
          onClick={handleItemDraw}
          disabled={data?.data.drawCount === 0}
        >
          아이템 뽑기
        </Button>
      </Flex>
      <ItemModal
        itemData={itemData}
        isOpen={isOpen}
        onClose={closeModal}
        onNavigate={() => router.push(ROUTES.CLOSET)}
      />
    </>
  );
};
