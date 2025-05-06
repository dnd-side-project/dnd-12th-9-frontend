import Image from 'next/image';

import { HStack, JustifyBetween, Stack } from '@sbooky/ui/components/Layout';
import { Text } from '@sbooky/ui/components/Text';
import { MemberBook } from 'app/_api/types/book';
import { MY_READING_STATUS_TEXT } from 'app/_constants/status';

import { DialogTrigger } from './DialogTrigger';
import { KeywordSection } from './KeywordSection';

type Props = MemberBook & {
  memberId?: string;
};

export const ReadingCard = (props: Props) => {
  const { readStatus, completedAt, isOwner, memberId } = props;

  return (
    <Stack className="gap-5 rounded-lg bg-white px-5 py-4">
      <JustifyBetween className="items-center">
        <HStack className="gap-3">
          <Image
            src={MY_READING_STATUS_TEXT[readStatus].image}
            alt="독서 상태"
            width={52}
            height={52}
          />
          <Stack className="gap-0.5">
            <Text type="Title1" weight="semibold" className="text-gray-900">
              {MY_READING_STATUS_TEXT[readStatus].text}
            </Text>
            <Text type="Body2" weight="medium" className="text-gray-400">
              {completedAt}
            </Text>
          </Stack>
        </HStack>
        {isOwner && <DialogTrigger data={props} memberId={memberId} />}
      </JustifyBetween>
      {isOwner && readStatus === 'COMPLETED' && <KeywordSection {...props} />}
    </Stack>
  );
};
