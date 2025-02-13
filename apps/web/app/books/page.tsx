import Image from 'next/image';

import { Button } from '@repo/ui/components/Button';
import { Chip } from '@repo/ui/components/Chip';
import { Header } from '@repo/ui/components/Header';
import { CenterStack, HStack, PageLayout, Stack } from '@repo/ui/components/Layout';
import { Text } from '@repo/ui/components/Text';

import EMPTY_STATE from '/assets/EMPTY_STATE.png';

import { BackButton } from '../_components/BackButton';

const BookListPage = () => {
  return (
    <PageLayout header={<Header left={<BackButton />}>책장</Header>}>
      <BookListHeader />
      <Stack className="grow px-4">
        <HStack className="gap-1">
          <Chip variant="rounded" active>
            전체
          </Chip>
          <Chip variant="rounded" active={false}>
            읽기 전
          </Chip>
          <Chip variant="rounded" active={false}>
            읽는 중
          </Chip>
          <Chip variant="rounded" active={false}>
            완독
          </Chip>
        </HStack>
        {/* TODO fallback 레이아웃 수정 필요 */}
        {/* <Spacing className="h-20" /> */}
        <CenterStack className="grow">
          <Image src={EMPTY_STATE} alt="비어있는 책장" width={120} height={120} />
          <Text className="text-gray-900" weight="semibold" type="Title1">
            책장이 비어 있어요...
          </Text>
          <Text className="text-gray-500" weight="medium" type="Body2">
            책을 검색하고 내 책장에 추가해보세요.
          </Text>
          <Button variant="primary50" size="sm">
            등록하기
          </Button>
        </CenterStack>
      </Stack>
    </PageLayout>
  );
};

const BookListHeader = () => {
  return (
    <div className="gap-2 px-4 py-8">
      <Text type="Heading1" weight="semibold">
        {`책장에 총 0권의 책이${'\n'} 담겨있어요`}
      </Text>
    </div>
  );
};

export default BookListPage;
