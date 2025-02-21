'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

import BLACKY_DONE from '@public/BLACKY_DONE.png';

import { Button } from '@repo/ui/components/Button';
import { Icon } from '@repo/ui/components/Icon';
import { Stack } from '@repo/ui/components/Layout';

import { MissionCard } from './MissionCard';

export const MissionCardList = () => {
  const router = useRouter();

  const goSearchPage = () => router.push('/search');
  const goBooksPage = () => router.push('/books');

  return (
    <Stack className="gap-3 px-4">
      <MissionCard
        title="새로운 책 등록하기"
        orbCount={10}
        missionIcon={<Icon type="missionCard" />}
        action={
          <Button variant="primary50" size="sm" className="font-medium" onClick={goSearchPage}>
            하러 가기
          </Button>
        }
      />
      <MissionCard
        title="책 평가하기"
        orbCount={50}
        missionIcon={<Image src={BLACKY_DONE} width={40} height={40} alt="책 평가" />}
        action={
          <Button variant="primary50" size="sm" className="font-medium" onClick={goBooksPage}>
            하러 가기
          </Button>
        }
      />
      <MissionCard
        title="독서 카드 공유하기"
        orbCount={50}
        missionIcon={<Icon type="missionShare" width={50} height={50} />}
        action={
          <Button variant="primary50" size="sm" className="font-medium" disabled>
            하러 가기
          </Button>
        }
      />
    </Stack>
  );
};
