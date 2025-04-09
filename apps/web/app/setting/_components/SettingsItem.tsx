import { Icon } from '@sbooky/ui/components/Icon';
import { IconButton } from '@sbooky/ui/components/IconButton';
import { JustifyBetween } from '@sbooky/ui/components/Layout';
import { Text } from '@sbooky/ui/components/Text';

type SettingItemProps = {
  name: string;
  onClick: VoidFunction;
};
export const SettingItem = ({ name, onClick }: SettingItemProps) => {
  return (
    <IconButton onClick={onClick}>
      <JustifyBetween className="w-full items-center">
        <Text type="Body1" className="py-2 text-gray-900">
          {name}
        </Text>
        <Icon type="next" />
      </JustifyBetween>
    </IconButton>
  );
};
