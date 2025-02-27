import { useRouter } from 'next/navigation';

import { Drawer } from '@repo/ui/components/Drawer';
import { Icon } from '@repo/ui/components/Icon';
import { Flex, HStack, JustifyBetween, Spacing } from '@repo/ui/components/Layout';
import { Text } from '@repo/ui/components/Text';
import { GetEquippedItemResponse } from 'app/_api/types/item';
import { ROUTES } from 'app/_constants/route';

import { DRAWER_MENU } from '../_constants/topbar';

type HomeDrawerProps = {
  memberId?: string;
  data?: GetEquippedItemResponse;
  isOpen: boolean;
  onClose: () => void;
};
export const HomeDrawer = ({ memberId, data, isOpen, onClose }: HomeDrawerProps) => {
  const router = useRouter();
  return (
    <Drawer isOpen={isOpen} onClose={onClose}>
      <Flex className="flex-col">
        <Spacing className="h-[45px]" />
        <Flex className="w-full cursor-pointer justify-end px-5 py-3">
          <Icon type="close" size={24} color="gray800" onClick={onClose} />
        </Flex>
        <Flex className="mb-3 flex-col gap-1 px-5">
          <Text type="Title1" weight="semibold" className="text-gray-900">
            {memberId ? data?.data.nickName : '로그인/회원가입'}
          </Text>
          <Text type="Title2" className="text-gray-500">
            {memberId ? '오늘도 즐거운 독서하세요!' : '지금 가입하면 구슬 100개!'}
          </Text>
        </Flex>
        <Spacing className="h-2 bg-gray-50" />
      </Flex>
      <Spacing className="h-5" />
      <Flex className="flex-col px-5">
        {Object.values(DRAWER_MENU).map(({ icon, title, router: path }) => (
          <HStack
            key={title}
            className="w-full cursor-pointer gap-3 py-3"
            onClick={() => router.push(path)}
          >
            <Icon type={icon} size={24} color="gray700" />
            <Text type="Title1" className="text-gray-900">
              {title}
            </Text>
          </HStack>
        ))}
      </Flex>
      <Flex className="w-full cursor-pointer px-5 py-2" onClick={() => router.push(ROUTES.PROFILE)}>
        <JustifyBetween className="w-full items-center rounded-lg bg-gray-50 px-3 py-[10px]">
          <HStack className="justify-c w-full gap-2">
            <HStack className="h-7 w-7 justify-center rounded-full bg-[#FFCC00]">
              <Icon type="kakao" size={16} color="black" />
            </HStack>
            <Flex className="flex-col items-start">
              <Text type="caption" className="text-gray-600">
                카카오톡 공유하고
              </Text>
              <Text type="Title2" weight="semibold" className="text-gray-900">
                내 서재 자랑하기
              </Text>
            </Flex>
          </HStack>
          <Icon type="next" />
        </JustifyBetween>
      </Flex>
    </Drawer>
  );
};
