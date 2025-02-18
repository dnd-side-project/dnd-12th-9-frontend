import { Button } from '@repo/ui/components/Button';
import { OrgIcon } from '@repo/ui/components/Button/assets/OrbIcon';
import { Icon } from '@repo/ui/components/Icon';
import { Box, Flex, HStack, JustifyBetween, Spacing } from '@repo/ui/components/Layout';
import { Text } from '@repo/ui/components/Text';

// TODO: 추후 props명 수정
type SummaryProps = {
  orbCount: number;
  totalBookCount: number;
  tryAvailable: number;
};
export const Summary = ({ orbCount = 0, totalBookCount = 0, tryAvailable = 0 }: SummaryProps) => {
  return (
    <Box className="flex-col gap-3 rounded-lg bg-white px-4 pt-4">
      <JustifyBetween className="pb-3">
        <HStack className="items-center gap-1">
          <Text type="Body2" className="mr-1 text-gray-600">
            보유 구슬
          </Text>
          <OrgIcon />
          <Text type="Title2" weight="medium" className="text-black">
            {orbCount}
          </Text>
        </HStack>
        <Flex className="gap-1">
          <Text type="Body2" className="text-gray-800">
            뽑기 가능 횟수
          </Text>
          <Text type="Body2" className="text-green-600">
            {tryAvailable}회
          </Text>
        </Flex>
      </JustifyBetween>
      <Spacing className="h-[1px] bg-gray-200" />
      <JustifyBetween className="pb-3 pt-3">
        <HStack className="items-center gap-2">
          <Text type="Body1" className="text-gray-600">
            지금까지 완독한 책
          </Text>
          <Text type="Heading1" weight="semibold" className="text-gray-900">
            {totalBookCount}권
          </Text>
        </HStack>
        <Button
          size="sm"
          variant="primary50"
          right={<Icon type="next" size={16} color="primary" />}
        >
          책장가기
        </Button>
      </JustifyBetween>
    </Box>
  );
};
