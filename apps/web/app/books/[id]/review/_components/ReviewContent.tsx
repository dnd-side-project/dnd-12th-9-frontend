'use client';

import Image from 'next/image';

import { useState } from 'react';

import { Button } from '@repo/ui/components/Button';
import { Chip } from '@repo/ui/components/Chip';
import { HStack, Stack } from '@repo/ui/components/Layout';
import { Text } from '@repo/ui/components/Text';
import { entries } from 'app/_util/entries';

import { KEYWORD_MAP } from '../_constants/keyword';
import { getImageURLByKeyword, getTitleByKeywordType } from '../_util/keyword';

export const ReviewContent = () => {
  const [selectedKeywordIdList, setSelectedKeywordIdList] = useState<number[]>([]);

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

  const resetSelectedKeywordIdList = () => setSelectedKeywordIdList([]);

  return (
    <Stack className="gap-5 px-4 pb-4">
      <Stack className="rounded-2xl bg-white p-5">
        <Stack className="gap-8">
          {entries(KEYWORD_MAP).map(([type, keywordList]) => (
            <Stack className="gap-4" key={type}>
              <Text type="Title2" weight="medium">
                {getTitleByKeywordType(type)}
              </Text>
              <HStack className="flex-wrap gap-3">
                {keywordList.map(({ id, keyword, description }) => (
                  <Chip
                    variant="keyword"
                    active={selectedKeywordIdList.includes(id)}
                    key={id}
                    className="gap-1"
                    onClick={onClickKeyword(id)}
                  >
                    <Image
                      src={getImageURLByKeyword(keyword)}
                      alt={description}
                      width={24}
                      height={24}
                    />
                    {description}
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
        >
          초기화
        </Button>
        <Button variant="black" className="grow">
          완료하기
        </Button>
      </HStack>
    </Stack>
  );
};
