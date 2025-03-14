'use client';

import { ReactNode } from 'react';

import { Icon } from '@sbooky/ui/components/Icon';
import { Center, HStack, JustifyBetween, Stack } from '@sbooky/ui/components/Layout';
import { Text } from '@sbooky/ui/components/Text';

type MissionCardProps = {
  title: string;
  orbCount?: number;
  action?: ReactNode;
  missionIcon: ReactNode;
};

export const MissionCard = ({ title, orbCount, action, missionIcon }: MissionCardProps) => {
  return (
    <JustifyBetween className="items-center gap-3 rounded-lg bg-white p-4">
      <HStack className="gap-3">
        <Center className="h-[50px] w-[50px] rounded-full bg-gray-50">{missionIcon}</Center>
        <Stack className="gap-1">
          <Text type="Title1" weight="medium" className="text-gray-800">
            {title}
          </Text>
          <HStack className="gap-1">
            <Icon type="orb" />
            <Text type="Body2" weight="medium" className="text-green-600">
              구슬 {orbCount ?? '??'}개
            </Text>
          </HStack>
        </Stack>
      </HStack>
      {action}
    </JustifyBetween>
  );
};
