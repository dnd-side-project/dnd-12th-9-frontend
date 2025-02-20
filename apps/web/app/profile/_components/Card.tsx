import Image from 'next/image';

import { Icon } from '@repo/ui/components/Icon';
import { Box, CenterStack, JustifyBetween, Spacing } from '@repo/ui/components/Layout';
import { Text } from '@repo/ui/components/Text';

export const Card = () => {
  const ghostImage = '/Ghost/BASIC_GHOST.png';
  return (
    <CenterStack className="border-1 gap-6 rounded-3xl border-white bg-gradient-to-t from-[#E6D4B6] to-[#F7F0DA] px-6 py-[26px]">
      <Box className="rounded-3xl bg-white/70 px-3 py-[6px] text-gray-600">독서카드</Box>
      <Image src={ghostImage} alt="ghost" width={200} height={200} />
      <CenterStack className="w-full flex-col gap-2">
        <Text type="Heading3" weight="semibold" className="text-gray-800">
          김태희
        </Text>
        <Spacing className="h-[1px] w-full bg-[#DDCCAF]" />
      </CenterStack>
      <CenterStack className="w-full flex-col justify-stretch gap-1">
        <JustifyBetween className="w-full">
          <Text type="Title2" className="text-[#9C8D74]">
            완독한 책
          </Text>
          <Text type="Body2" className="text-gray-700">
            총 권
          </Text>
        </JustifyBetween>
        <JustifyBetween className="w-full">
          <Text type="Title2" className="text-[#9C8D74]">
            등록 날짜
          </Text>
          <Text type="Body2" className="text-gray-700">
            2025년
          </Text>
        </JustifyBetween>
      </CenterStack>

      <Icon type="logo" size={65} className="" />
    </CenterStack>
  );
};
