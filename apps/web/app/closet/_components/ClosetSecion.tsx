'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { useSuspenseQueries } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';

import { Button } from '@sbooky/ui/components/Button';
import { Header, HeaderLeftElement } from '@sbooky/ui/components/Header';
import { Icon } from '@sbooky/ui/components/Icon';
import { IconButton } from '@sbooky/ui/components/IconButton';
import { Box, Center, PageLayout, Spacing, Stack } from '@sbooky/ui/components/Layout';
import { useUpdateEquippedItem } from 'app/_api/mutations/useUpdateEquippedItem';
import { itemQueryOptions } from 'app/_api/queries/item';
import { DYNAMIC_ROUTES } from 'app/_constants/route';

import { GHOST_MAP, BASIC_GHOST } from '../_constants/item';
import { useGhost } from '../_hooks/useGhost';
import { getImageUrl } from '../_util/image';

import { ItemCard } from './ItemCard';

type ClosetSectionProps = {
  memberId: string;
};

export const ClosetSection = ({ memberId }: ClosetSectionProps) => {
  const router = useRouter();
  const [
    {
      data: {
        data: { items },
      },
    },
    {
      data: {
        data: {
          findEquippedItemsResponse: { items: equippedItem },
        },
      },
    },
  ] = useSuspenseQueries({
    queries: [itemQueryOptions.list(memberId), itemQueryOptions.equipped(memberId)],
  });

  const initialGhost = GHOST_MAP[equippedItem.CHARACTER[0] ?? BASIC_GHOST.code];

  const { currentGhost, updateCurrentGhost, resetGhost, isInitialGhost } = useGhost(initialGhost);

  const { mutate, isPending } = useUpdateEquippedItem();

  const disabled = isInitialGhost || isPending;

  const onClickSavebutton = () => {
    mutate(
      {
        equippedItemCode: initialGhost.code,
        toEquipItemCode: currentGhost.code,
      },
      {
        onSuccess: () => toast.success(`유령 변경에 성공했어요`),
        onError: () => toast.error(`유령 변경에 실패했어요`),
      }
    );
  };

  const goBack = () => {
    router.push(DYNAMIC_ROUTES.USER(memberId));
  };

  return (
    <PageLayout
      header={
        <Header
          left={
            <HeaderLeftElement onClick={goBack}>
              <Icon type="back" color="gray800" />
            </HeaderLeftElement>
          }
          className="z-10 bg-transparent"
        >
          꾸미기
        </Header>
      }
      containerClassName="relative"
      className="flex flex-col"
    >
      <Image
        fill
        priority
        src="/closet/BG_CLOSET.webp"
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
        <Spacing className="h-[80px]" />
      </Stack>
      <Center className="fixed bottom-0 w-full max-w-[440px] bg-white p-4 outline-none">
        <Button
          size="lg"
          className="w-full px-[140px] py-3.5"
          disabled={disabled}
          onClick={onClickSavebutton}
        >
          저장하기
        </Button>
      </Center>
    </PageLayout>
  );
};
