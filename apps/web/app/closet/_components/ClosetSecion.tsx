'use client';

import Image from 'next/image';

import { useState } from 'react';

import { useSuspenseQueries } from '@tanstack/react-query';

import { Button } from '@repo/ui/components/Button';
import { Header } from '@repo/ui/components/Header';
import { Icon } from '@repo/ui/components/Icon';
import { IconButton } from '@repo/ui/components/IconButton';
import { Box, PageLayout, Stack } from '@repo/ui/components/Layout';
import { useUpdateEquippedItem } from 'app/_api/mutations/useUpdateEquippedItem';
import { itemQueryOptions } from 'app/_api/queries/item';
import { BackButton } from 'app/_components/BackButton';

import { Ghost, GHOST_MAP } from '../_fixture/item';
import { getImageUrl } from '../_util/image';

import { ItemCard } from './ItemCard';

const BASIC_GHOST = GHOST_MAP['basic_ghost'] satisfies Ghost;

type ClosetSectionProps = {
  memberId: string;
};

export const ClosetSection = ({ memberId }: ClosetSectionProps) => {
  const [
    {
      data: {
        data: { items },
      },
    },
    {
      data: {
        data: { items: equippedItem },
      },
    },
  ] = useSuspenseQueries({
    queries: [itemQueryOptions.list(memberId), itemQueryOptions.equipped(memberId)],
  });

  const initialGhost = GHOST_MAP[equippedItem.CHARACTER[0] ?? BASIC_GHOST.code];

  const [currentGhost, setCurrentGhost] = useState<Ghost>(
    GHOST_MAP[equippedItem.CHARACTER[0] ?? BASIC_GHOST.code]
  );

  const updateCurrentGhost = (ghost: Ghost) => () => setCurrentGhost(ghost);
  const resetGhost = () => setCurrentGhost(initialGhost);

  const { mutate, isPending } = useUpdateEquippedItem();

  const disabled = currentGhost.code === initialGhost.code || isPending;

  const onClickSavebutton = () => {
    mutate({
      equippedItemCode: initialGhost.code,
      toEquipItemCode: currentGhost.code,
    });
  };

  return (
    <PageLayout
      header={
        <Header left={<BackButton />} className="z-10 bg-transparent">
          꾸미기
        </Header>
      }
      containerClassName="relative"
      className="flex flex-col"
    >
      <Image
        fill
        priority
        src="/closet/BG_CLOSET.png"
        alt="꾸미기 배경"
        className="absolute inset-0 z-0 h-full object-fill"
        sizes="(max-width: 440px) 100vw, 440px"
      />
      <Box className="relative flex h-[45%] shrink-0 items-center justify-center">
        <Image
          src={getImageUrl(currentGhost.code)}
          width={200}
          height={200}
          alt={currentGhost.name}
          className="relative -top-2 h-[200px]"
        />
        <IconButton
          className="absolute bottom-4 right-4 z-30 rounded-full bg-white p-2.5"
          onClick={resetGhost}
        >
          <Icon type="undo" color="gray800" />
        </IconButton>
      </Box>
      <Stack className="border-box relative w-full grow gap-4 overflow-y-scroll bg-white p-4 pt-8">
        <Box className="grid grid-cols-3 gap-x-4 gap-y-4">
          {items.CHARACTER.map((item) => (
            <ItemCard
              key={item.code}
              {...item}
              onClick={updateCurrentGhost(item)}
              active={item.name === currentGhost.name}
            />
          ))}
        </Box>
        <Button
          size="lg"
          className="w-full px-[140px] py-3.5"
          disabled={disabled}
          onClick={onClickSavebutton}
        >
          저장하기
        </Button>
      </Stack>
    </PageLayout>
  );
};
