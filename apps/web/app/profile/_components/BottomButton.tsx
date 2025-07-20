import { ComponentProps } from 'react';

import { Icon } from '@sbooky/ui/components/Icon';
import { IconType } from '@sbooky/ui/components/Icon/assets';
import { IconButton } from '@sbooky/ui/components/IconButton';
import { CenterStack } from '@sbooky/ui/components/Layout';
import { Text } from '@sbooky/ui/components/Text';

type BottomButtonProps = {
  name: string;
  icon: IconType;
} & ComponentProps<'button'>;

export const BottomButton = ({ name, icon, ...props }: BottomButtonProps) => {
  return (
    <CenterStack key={name} className="gap-3">
      <IconButton
        key={name}
        className="h-11 w-11 rounded-full border border-gray-100 bg-white"
        {...props}
      >
        <Icon type={icon} color="gray800" />
      </IconButton>
      <Text type="Title2" className="text-gray-800">
        {name}
      </Text>
    </CenterStack>
  );
};
