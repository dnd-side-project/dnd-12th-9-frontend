import { OrgIcon } from '@repo/ui/components/Button/assets/OrbIcon';
import { Flex, JustifyBetween } from '@repo/ui/components/Layout';
import { Text } from '@repo/ui/components/Text';

// TODO: 추후 타입명 변경
type StoreCardProps = {
  count: number;
  tryAvailable: number;
};

export const StoreCard = ({ count, tryAvailable }: StoreCardProps) => {
  return (
    <JustifyBetween className="rounded-lg bg-white p-4">
      <Flex className="items-center gap-1">
        <Text type="Body2" className="mr-1 text-gray-600">
          보유 구슬
        </Text>
        <OrgIcon />
        <Text type="Title2" weight="medium" className="text-black">
          {count}
        </Text>
      </Flex>
      <Flex className="gap-1">
        <Text type="Body2" className="text-gray-800">
          뽑기 가능 횟수
        </Text>
        <Text type="Body2" className="text-green-600">
          {tryAvailable}회
        </Text>
      </Flex>
    </JustifyBetween>
  );
};
