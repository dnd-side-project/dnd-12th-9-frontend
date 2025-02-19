'use client';

import Image from 'next/image';

import { useState } from 'react';

import { Button } from '@repo/ui/components/Button';
import { Header } from '@repo/ui/components/Header';
import { Icon } from '@repo/ui/components/Icon';
import { IconButton } from '@repo/ui/components/IconButton';
import { Box, PageLayout, Stack } from '@repo/ui/components/Layout';
import { BackButton } from 'app/_components/BackButton';
import { keys } from 'app/_util/keys';

import { ItemCard } from './_components/ItemCard';
import { Ghost, GHOST_MAP } from './_fixture/item';
import { getImageUrl } from './_util/image';

const initialGhost = GHOST_MAP['basic_ghost'];

const ClosetPage = () => {
  const [currentGhost, setCurrentGhost] = useState<Ghost>(initialGhost);

  const updateCurrentGhost = (ghost: Ghost) => () => setCurrentGhost(ghost);
  const resetGhost = () => setCurrentGhost(initialGhost);

  const disabled = currentGhost.code === initialGhost.code;

  //TODO 저장 버튼 클릭시 API 연동 필요
  const onClickSavebutton = () => {};

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
          {keys(GHOST_MAP).map((key) => (
            <ItemCard
              key={key}
              {...GHOST_MAP[key]}
              onClick={updateCurrentGhost(GHOST_MAP[key])}
              active={GHOST_MAP[key].name === currentGhost.name}
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

export default ClosetPage;
