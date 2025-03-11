import { ComponentProps } from 'react';

import { Icon } from '@sbooky/ui/components/Icon';
import { IconButton } from '@sbooky/ui/components/IconButton';
import { Center, CenterStack } from '@sbooky/ui/components/Layout';
import { Text } from '@sbooky/ui/components/Text';

const PROFILE_BOTTOM_BUTTON = [
  {
    name: '저장하기',
    icon: 'download',
  },
  // {
  //   name: '카카오톡',
  //   icon: 'kakao',
  // },
  // {
  //   name: '링크복사',
  //   icon: 'link',
  // },
] as const;

type BottomButtonProps = {
  saveImageButtonProps?: ComponentProps<'button'>;
};

export const BottomButton = ({ saveImageButtonProps }: BottomButtonProps) => {
  return (
    <Center className="px-4 pb-4">
      {PROFILE_BOTTOM_BUTTON.map((button) => (
        <CenterStack key={button.name} className="gap-3">
          <IconButton
            key={button.name}
            className="h-11 w-11 rounded-full border border-gray-100 bg-white"
            {...saveImageButtonProps}
          >
            <Icon type={button.icon} />
          </IconButton>
          <Text type="Title2" className="text-gray-800">
            {button.name}
          </Text>
        </CenterStack>
      ))}
    </Center>
  );
};
