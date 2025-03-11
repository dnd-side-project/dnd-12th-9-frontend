import { Icon } from '@sbooky/ui/components/Icon';
import { CenterStack, Spacing } from '@sbooky/ui/components/Layout';
import { Text } from '@sbooky/ui/components/Text';

export const SearchFallback = () => {
  return (
    <>
      <Spacing className="h-40" />
      <CenterStack className="grow">
        <Icon type="cryGhost" size={120} />
        <Spacing className="h-4" />
        <Text type="Title1" weight="semibold" className="text-gray-900">
          찾으시는 책이 없어요!
        </Text>
        <Spacing className="h-2" />
        <Text type="Body2" className="text-gray-500">
          제목이나 작가명을 다시 확인해주세요.
        </Text>
        <Spacing className="h-5" />
      </CenterStack>
    </>
  );
};
