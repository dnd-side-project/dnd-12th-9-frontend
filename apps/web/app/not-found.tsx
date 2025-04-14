'use client';

import { useRouter } from 'next/navigation';

import { Button } from '@sbooky/ui/components/Button';
import { PageLayout, VStack } from '@sbooky/ui/components/Layout';
import { Text } from '@sbooky/ui/components/Text';

import { SadLuna } from './_components/SadLuna';

export default function NotFoundPage() {
  const router = useRouter();
  const handleNavigate = () => router.push('/');

  return (
    <PageLayout className="bg-white">
      <VStack className="h-dvh justify-center gap-2">
        <SadLuna />
        <Text type="Title1" weight="semibold" className="text-gray-900">
          페이지를 찾을 수 없습니다.
        </Text>
        <Text type="Body2" weight="medium" className="text-gray-500">
          다시 홈으로 돌아가서 시도해주세요.
        </Text>
        <Button size="md" variant="primary50" className="mt-3" onClick={handleNavigate}>
          홈으로 가기
        </Button>
      </VStack>
    </PageLayout>
  );
}
