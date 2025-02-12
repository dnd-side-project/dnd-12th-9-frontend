import { Header } from '@repo/ui/components/Header';
import { PageLayout, Stack } from '@repo/ui/components/Layout';
import { Text } from '@repo/ui/components/Text';

import { BackButton } from '../_components/BackButton';

import { MissionCardList } from './_components/MissionCardList';

const MissionPage = () => {
  return (
    <PageLayout
      header={
        <Header left={<BackButton />} className="bg-gray-50">
          미션하기
        </Header>
      }
      className="bg-gray-50"
    >
      <MissionHeader />
      <MissionCardList />
    </PageLayout>
  );
};

const MissionHeader = () => {
  return (
    <Stack className="gap-2 px-4 py-8">
      <Text type="Heading1" weight="semibold">
        구슬 모으기 미션
      </Text>
      <Text type="Body1" className="text-gray-500" weight="medium">
        미션을 수행하여 구슬을 획득하세요
      </Text>
    </Stack>
  );
};

export default MissionPage;
