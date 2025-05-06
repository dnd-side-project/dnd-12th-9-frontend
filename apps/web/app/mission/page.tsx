import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

import { Header } from '@sbooky/ui/components/Header';
import { PageLayout, Stack } from '@sbooky/ui/components/Layout';
import { Text } from '@sbooky/ui/components/Text';
import { COOKIE_ID } from 'app/_constants/cookie';
import { ROUTES } from 'app/_constants/route';

import { BackButton } from '../_components/BackButton';

import { MissionCardList } from './_components/MissionCardList';

const MissionPage = async () => {
  const cookieStore = await cookies();
  const memberId = cookieStore.get(COOKIE_ID.MEMBER_ID)?.value;
  const nickname = cookieStore.get(COOKIE_ID.NICKNAME)?.value;

  if (!memberId) {
    redirect(ROUTES.LOGIN);
  }

  if (!nickname) {
    redirect(ROUTES.NICKNAME);
  }

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
      <MissionCardList memberId={memberId} />
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
