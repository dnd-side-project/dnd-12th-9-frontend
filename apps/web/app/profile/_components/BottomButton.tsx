import { Icon } from '@repo/ui/components/Icon';
import { IconButton } from '@repo/ui/components/IconButton';
import { CenterStack, JustifyBetween } from '@repo/ui/components/Layout';
import { Text } from '@repo/ui/components/Text';

const PROFILE_BOTTOM_BUTTON = [
  {
    name: '저장하기',
    icon: 'download',
  },
  {
    name: '카카오톡',
    icon: 'kakao',
  },
  {
    name: '링크복사',
    icon: 'link',
  },
] as const;

export const BottomButton = () => {
  return (
    <JustifyBetween className="flex-row gap-4 px-4">
      {PROFILE_BOTTOM_BUTTON.map((button) => (
        <CenterStack key={button.name} className="gap-3">
          <IconButton
            key={button.name}
            className="h-11 w-11 rounded-full border border-gray-100 bg-white"
          >
            <Icon type={button.icon} />
          </IconButton>
          <Text type="Title2" className="text-gray-800">
            {button.name}
          </Text>
        </CenterStack>
      ))}
    </JustifyBetween>
  );
};
