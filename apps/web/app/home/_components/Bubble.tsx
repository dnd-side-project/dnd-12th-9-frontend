import { Icon } from '@repo/ui/components/Icon';
import { Box, Center, Spacing } from '@repo/ui/components/Layout';
import { Text } from '@repo/ui/components/Text';

type BubbleProps = {
  nickName: string;
  like: number;
};
export const Bubble = ({ nickName, like }: BubbleProps) => {
  return (
    <Box className="inline-flex h-[34px] w-fit rounded-full bg-white/70 px-3 py-2">
      <Center className="inline-flex items-center gap-1">
        <Text type="caption" className="text-gray-900">
          {nickName}
        </Text>
        <Spacing className="h-full w-0.5 bg-gray-200" />
        <Icon type="heart" size={16} color="red" />
        <Text type="caption" className="text-gray-900">
          {like}
        </Text>
      </Center>
    </Box>
  );
};
