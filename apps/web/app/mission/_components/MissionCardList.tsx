'use client';

import { Button } from '@repo/ui/components/Button';
import { Stack } from '@repo/ui/components/Layout';

import { MissionCard } from './MissionCard';

export const MissionCardList = () => {
  return (
    <Stack className="gap-3 px-4">
      <MissionCard
        title="새로운 책 등록하기"
        orbCount={10}
        action={
          <Button variant="primary50" size="sm" className="font-medium">
            책장가기
          </Button>
        }
      />
      <MissionCard
        title="책 완독하기"
        orbCount={50}
        action={
          <Button variant="primary50" size="sm" className="font-medium">
            책장가기
          </Button>
        }
      />
      <MissionCard
        title="독서 카드 공유하기"
        orbCount={50}
        action={
          <Button variant="primary50" size="sm" className="font-medium">
            책장가기
          </Button>
        }
      />
    </Stack>
  );
};
