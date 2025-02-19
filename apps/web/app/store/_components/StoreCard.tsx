import { OrgIcon } from '@repo/ui/components/Button/assets/OrbIcon';
import { Flex, JustifyBetween } from '@repo/ui/components/Layout';
import { Text } from '@repo/ui/components/Text';

type StoreCardProps = {
  drawCount: number;
  drawPoint: number;
};

export const StoreCard = ({ drawCount, drawPoint }: StoreCardProps) => {
  return (
    <JustifyBetween className="rounded-lg bg-white p-4">
      <Flex className="items-center gap-1">
        <Text type="Body2" className="mr-1 text-gray-600">
          보유 구슬
        </Text>
        <OrgIcon />
        <Text type="Title2" weight="medium" className="text-black">
          {drawCount}
        </Text>
      </Flex>
      <Flex className="gap-1">
        <Text type="Body2" className="text-gray-800">
          뽑기 가능 횟수
        </Text>
        <Text type="Body2" className="text-green-600">
          {drawPoint}회
        </Text>
      </Flex>
    </JustifyBetween>
  );
};
