'use client';

import { useRouter } from 'next/navigation';

import { useState } from 'react';

import { Button, ButtonElement } from '@repo/ui/components/Button';
import { Flex } from '@repo/ui/components/Layout';
import { useModal } from '@repo/ui/hooks/useModal';
import { useItemDraw } from 'app/_api/mutations/useItemDraw';
import { useMemberPoint } from 'app/_api/queries';
import { Item, ItemDrawResponse } from 'app/_api/types/draw';
import { ItemModal } from 'app/_components/ItemModal';

import { StoreCard } from './StoreCard';

export const ItemInfo = () => {
  const router = useRouter();
  const { data: data } = useMemberPoint();
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
        setItemData(response.data);
        openModal();
      },
      // TODO: 에러 처리
      onError: () => {},
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
        onFetch={handleItemDraw}
        onNavigate={() => router.push('/closet')}
      />
    </>
  );
};
