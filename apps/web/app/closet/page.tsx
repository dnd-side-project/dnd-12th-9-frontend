'use client';

import Image from 'next/image';

import { useState } from 'react';

import { Button } from '@repo/ui/components/Button';
import { Header } from '@repo/ui/components/Header';
import { Icon } from '@repo/ui/components/Icon';
import { IconButton } from '@repo/ui/components/IconButton';
import { Box, PageLayout, Stack } from '@repo/ui/components/Layout';
import { BackButton } from 'app/_components/BackButton';

import { ItemCard } from './_components/ItemCard';
import { Ghost, GHOST_LIST } from './_fixture/item';
import { getImageUrl } from './_util/image';

const ClosetPage = () => {
  const [currentGhost, setCurrentGhost] = useState<Ghost>(GHOST_LIST[0]);

  const updateCurrentGhost = (ghost: Ghost) => () => setCurrentGhost(ghost);

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
        src="/closet/BG_ClOSET.png"
        alt="꾸미기 배경"
        className="absolute inset-0 z-0 h-full object-cover"
        sizes="(max-width: 440px) 100vw, 440px"
      />
      <Box className="flex h-[45%] shrink-0 justify-center pt-5">
        <Image
          src={getImageUrl(GHOST_LIST[0].code)}
          width={200}
          height={200}
          alt={GHOST_LIST[0].name}
          className="relative h-[200px] grow-0"
        />
      </Box>
      <Stack className="border-box relative w-full grow overflow-y-scroll bg-white p-4 pt-8">
        <IconButton className="absolute -top-[60px] right-4 rounded-full bg-white p-2.5">
          <Icon type="undo" color="gray800" />
        </IconButton>
        <Box className="gapx-4 grid grid-cols-3 gap-x-4 gap-y-4">
          {GHOST_LIST.map((ghost) => (
            <ItemCard
              key={ghost.name}
              {...ghost}
              onClick={updateCurrentGhost(ghost)}
              active={ghost.name === currentGhost.name}
            />
          ))}
        </Box>
        <Button size="lg">저장하기</Button>
      </Stack>
    </PageLayout>
  );
};

export default ClosetPage;
