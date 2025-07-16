'use client';

import { Ref } from 'react';

import { Box, CenterStack, JustifyBetween, Spacing } from '@sbooky/ui/components/Layout';
import { Text } from '@sbooky/ui/components/Text';
import { ProfileCardLogo } from 'app/assets/ProfileCardLogo';
import { getImageUrl } from 'app/closet/_util/image';

type Props = {
  ref: Ref<HTMLDivElement>;
  onImageLoaded: VoidFunction;
  nickName: string;
  code: string;
  completedBookCount: number;
};

export const Card = ({ ref, onImageLoaded, nickName, code, completedBookCount }: Props) => {
  return (
    <CenterStack
      className="border-1 gap-4 rounded-3xl border-white bg-gradient-to-t from-[#E6D4B6] to-[#F7F0DA] px-6 py-[26px]"
      ref={ref}
    >
      <Box className="rounded-3xl bg-white/70 px-3 py-[6px] text-gray-600">
        <Text type="Title2" weight="medium" className="whitespace-nowrap">
          독서카드
        </Text>
      </Box>
      {
        // next/image 컴포넌트 사용 시, /_next/image?url=... 형태의 동적 URL을 snapdom이 처리 못하는 이슈때문에 일반 img 태그 사용
        // eslint-disable-next-line @next/next/no-img-element
        <img src={getImageUrl(code)} alt="ghost" width={200} height={200} onLoad={onImageLoaded} />
      }
      <CenterStack className="w-full flex-col gap-2">
        <Text type="Heading3" weight="semibold" className="text-gray-800">
          {nickName}
        </Text>
        <Spacing className="h-[1px] w-full bg-[#DDCCAF]" />
      </CenterStack>
      <CenterStack className="w-full flex-col justify-stretch gap-1">
        <JustifyBetween className="w-full">
          <Text type="Title2" className="whitespace-nowrap text-[#9C8D74]">
            완독한 책
          </Text>
          <Text type="Body2" className="text-gray-700">
            총 {completedBookCount}권
          </Text>
        </JustifyBetween>
        <JustifyBetween className="w-full">
          <Text type="Title2" className="whitespace-nowrap text-[#9C8D74]">
            등록 날짜
          </Text>
          <Text type="Body2" className="text-gray-700">
            2025년
          </Text>
        </JustifyBetween>
      </CenterStack>
      <Spacing />
      <ProfileCardLogo />
    </CenterStack>
  );
};
