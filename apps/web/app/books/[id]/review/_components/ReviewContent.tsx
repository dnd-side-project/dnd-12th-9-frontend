'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { useState } from 'react';

import { useSuspenseQuery } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';

import { Button } from '@sbooky/ui/components/Button';
import { Chip } from '@sbooky/ui/components/Chip';
import { HStack, Stack } from '@sbooky/ui/components/Layout';
import { Text } from '@sbooky/ui/components/Text';
import { useModal } from '@sbooky/ui/hooks/useModal';
import { useUpdateEvaluation } from 'app/_api/mutations/useUpdateEvaluation';
import { evaluaionQueryOptions } from 'app/_api/queries/evaluation';
import { Evaluation } from 'app/_api/types/evaluation';
import { RewardModal } from 'app/_components/RewardModal';
import { entries } from 'app/_util/entries';

import { getImageURLByKeyword, getTitleByKeywordType } from '../_util/keyword';

export const ReviewContent = ({ id }: { id: string }) => {
  const router = useRouter();

  const {
    data: { data },
  } = useSuspenseQuery(evaluaionQueryOptions.list(id));

  const groupdData = data.reduce<{ GOOD: Evaluation[]; SHAME: Evaluation[] }>(
    (result, item) => {
      const category = String(item.evaluationId).startsWith('1') ? 'GOOD' : 'SHAME';
      return {
        ...result,
        [category]: [...(result[category] || []), item],
      };
    },
    { GOOD: [], SHAME: [] }
  );

  const initialKeywordList = data
    .filter(({ isSelected }) => isSelected)
    .map(({ evaluationId }) => evaluationId);

  const [selectedKeywordIdList, setSelectedKeywordIdList] = useState<number[]>(initialKeywordList);

  const onClickKeyword = (keywordId: number) => () => {
    const isExistKeywordId = selectedKeywordIdList.includes(keywordId);

    if (isExistKeywordId) {
      setSelectedKeywordIdList((prev) => prev.filter((id) => id !== keywordId));
      return;
    }

    const KEYWORD_MAX_LENGTH = 6;
    const isKeywordIdListMax = selectedKeywordIdList.length === KEYWORD_MAX_LENGTH;

    if (isKeywordIdListMax) {
      return;
    }

    setSelectedKeywordIdList((prev) => [...prev, keywordId]);
  };

  const resetSelectedKeywordIdList = () => setSelectedKeywordIdList(initialKeywordList);

  const { mutate, isPending } = useUpdateEvaluation();

  const isInitialReview = initialKeywordList.length === 0;

  const { isOpen, openModal } = useModal();

  const onClickSaveButton = () => {
    mutate(
      {
        bookId: id,
        keywordIds: selectedKeywordIdList,
      },
      {
        onSuccess: () => toast.success(`평가 ${isInitialReview ? '등록' : '수정'}에 성공했어요`),
        onError: () => toast.error(`평가 ${isInitialReview ? '등록' : '수정'}에 실패했어요`),
      }
    );
    if (isInitialReview) {
      openModal();
    } else {
      router.back();
    }
  };

  const areInitialKeywordListAndSelectedKeywordIdListArrayEqual = areArraysEqual(
    initialKeywordList,
    selectedKeywordIdList
  );

  const disabled =
    selectedKeywordIdList.length === 0 ||
    areInitialKeywordListAndSelectedKeywordIdListArrayEqual ||
    isPending;

  return (
    <Stack className="gap-5 px-4 pb-4">
      <Stack className="rounded-2xl bg-white p-5">
        <Stack className="gap-8">
          {entries(groupdData).map(([type, evaluationList]) => (
            <Stack className="gap-4" key={type}>
              <Text type="Title2" weight="medium" className="text-gray-900">
                {getTitleByKeywordType(type)}
              </Text>
              <HStack className="flex-wrap gap-3">
                {evaluationList.map(({ evaluationId, keyword, icon }) => (
                  <Chip
                    variant="keyword"
                    active={selectedKeywordIdList.includes(evaluationId)}
                    key={evaluationId}
                    className="gap-1"
                    onClick={onClickKeyword(evaluationId)}
                  >
                    <Image src={getImageURLByKeyword(icon)} alt={keyword} width={24} height={24} />
                    {keyword}
                  </Chip>
                ))}
              </HStack>
            </Stack>
          ))}
        </Stack>
      </Stack>
      <HStack className="justify-between gap-3">
        <Button
          iconType="undo"
          variant="gray200"
          className="grow"
          onClick={resetSelectedKeywordIdList}
          disabled={areInitialKeywordListAndSelectedKeywordIdListArrayEqual}
        >
          초기화
        </Button>
        <Button variant="black" className="grow" onClick={onClickSaveButton} disabled={disabled}>
          완료하기
        </Button>
      </HStack>
      <RewardModal type="single" isOpen={isOpen} onClose={() => router.back()} />
    </Stack>
  );
};

const areArraysEqual = (array1: number[], array2: number[]): boolean => {
  if (array1.length !== array2.length) {
    return false;
  }

  const combinedSet = new Set([...array1, ...array2]);

  return combinedSet.size === array1.length;
};
