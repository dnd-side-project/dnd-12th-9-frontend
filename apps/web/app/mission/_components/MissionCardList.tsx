'use client';

import Image from 'next/image';
import Link from 'next/link';

import BLACKY_DONE from '@public/BLACKY_DONE.webp';

import { Button } from '@sbooky/ui/components/Button';
import { Icon } from '@sbooky/ui/components/Icon';
import { Stack } from '@sbooky/ui/components/Layout';
import { DYNAMIC_ROUTES, ROUTES } from 'app/_constants/route';

import { MissionCard } from './MissionCard';

type MissionCardListProps = {
  memberId: string;
};

export const MissionCardList = ({ memberId }: MissionCardListProps) => {
  return (
    <Stack className="gap-3 px-4">
      <MissionCard
        title="새로운 책 등록하기"
        orbCount={10}
        missionIcon={<Icon type="missionCard" />}
        action={
          <Link href={ROUTES.SEARCH}>
            <Button variant="primary50" size="sm" className="font-medium">
              하러 가기
            </Button>
          </Link>
        }
      />
      <MissionCard
        title="책 평가하기"
        orbCount={50}
        missionIcon={<Image src={BLACKY_DONE} width={40} height={40} alt="책 평가" />}
        action={
          <Link href={DYNAMIC_ROUTES.BOOK_SHELF(memberId)}>
            <Button variant="primary50" size="sm" className="font-medium">
              하러 가기
            </Button>
          </Link>
        }
      />
      <MissionCard
        title="독서 카드 저장하기"
        orbCount={50}
        missionIcon={<Icon type="missionShare" width={50} height={50} />}
        action={
          <Link href={ROUTES.PROFILE}>
            <Button variant="primary50" size="sm" className="font-medium">
              하러 가기
            </Button>
          </Link>
        }
      />
    </Stack>
  );
};
