import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { useQuery } from '@tanstack/react-query';

import { Button } from '@repo/ui/components/Button';
import { Chip } from '@repo/ui/components/Chip';
import { Icon } from '@repo/ui/components/Icon';
import { Box, CenterStack, HStack, Spacing, Stack } from '@repo/ui/components/Layout';
import { Text } from '@repo/ui/components/Text';
import { evaluaionQueryOptions } from 'app/_api/queries/evaluation';
import { MemberBook } from 'app/_api/types/book';
import { DYNAMIC_ROUTES } from 'app/_constants/route';
import { getChipIconUrl } from 'app/books/_utils/getChipIconUrl';

type Props = MemberBook;

export const KeywordSection = ({ id }: Props) => {
  const router = useRouter();

  const goReviewPage = () => router.push(DYNAMIC_ROUTES.BOOK_REVIEW(id));

  const { isPending, data } = useQuery(evaluaionQueryOptions.list(id));
  const keywordList = data?.data.filter(({ isSelected }) => isSelected);
  const isEmptyKeywordList = keywordList?.length === 0;

  return (
    <>
      <Box className="h-[1px] bg-gray-100" />
      {!isPending &&
        (isEmptyKeywordList ? (
          <EmptyReview onClickReviewButon={goReviewPage} />
        ) : (
          <Stack className="gap-4">
            <HStack className="gap-2">
              <Text type="Title1" weight="semibold" className="text-gray-600">
                내 평가
              </Text>
              <button onClick={goReviewPage}>
                <Icon type="squarePen" />
              </button>
            </HStack>
            <HStack className="flex-wrap gap-x-3 gap-y-2.5">
              {keywordList?.map(({ icon, keyword, evaluationId }) => (
                <Chip key={evaluationId} variant="keyword" active={false} className="gap-1">
                  <Image src={getChipIconUrl(icon)} alt="keyword" width={20} height={20} />
                  {keyword}
                </Chip>
              ))}
            </HStack>
          </Stack>
        ))}
    </>
  );
};

const EmptyReview = ({ onClickReviewButon }: { onClickReviewButon: VoidFunction }) => {
  return (
    <CenterStack className="py-2">
      <Text type="Title1" weight="semibold" className="text-gray-900">
        아직 평가를 하지 않았어요.
      </Text>
      <Spacing className="h-2" />
      <Text type="Body2" weight="medium" className="text-gray-500">
        완독한 책을 평가하고 구슬을 받으세요.
      </Text>
      <Spacing className="h-4" />
      <Button className="my-1" onClick={onClickReviewButon}>
        평가하기
      </Button>
    </CenterStack>
  );
};
