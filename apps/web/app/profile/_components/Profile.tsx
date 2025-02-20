import { Header } from '@repo/ui/components/Header';
import { JustifyBetween, PageLayout } from '@repo/ui/components/Layout';
import { BackButton } from 'app/_components/BackButton';

import { BottomButton } from './BottomButton';
import { Card } from './Card';

type ProfileProps = {
  memberId: string;
};
export const Profile = ({ memberId }: ProfileProps) => {
  // TODO: 추후 주석 삭제
  console.log('memberId', memberId);
  return (
    <PageLayout
      className="flex h-dvh w-full flex-col bg-white"
      header={
        <Header left={<BackButton />} className="bg-white">
          자랑하기
        </Header>
      }
    >
      <JustifyBetween className="mx-11 mt-8 flex-col gap-10">
        <Card />
        <BottomButton />
      </JustifyBetween>
    </PageLayout>
  );
};
