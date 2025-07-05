import { useRouter } from 'next/navigation';

import { useSuspenseQuery } from '@tanstack/react-query';

import { Button } from '@sbooky/ui/components/Button';
import { Icon } from '@sbooky/ui/components/Icon';
import { CenterStack, Spacing } from '@sbooky/ui/components/Layout';
import { itemQueryOptions } from 'app/_api/queries/item';
import { DYNAMIC_ROUTES } from 'app/_constants/route';
import { UserType } from 'app/_util/userType';

import { Bubble } from './Bubble';
import { Ghost } from './Ghost';

type MemberInfoProps = {
  userType: UserType;
  memberId: string;
  myMemberId?: string;
};

export const MemberInfo = ({ userType, memberId, myMemberId }: MemberInfoProps) => {
  const isOtherUser = userType === 'OTHER';
  const { data } = useSuspenseQuery(itemQueryOptions.equipped(memberId));

  const router = useRouter();

  const goMyLibrary = () => {
    if (!myMemberId) {
      console.error('Member ID is required to navigate to the library.');
      return;
    }

    router.push(DYNAMIC_ROUTES.BOOK_SHELF(myMemberId));
  };

  return (
    <>
      <CenterStack>
        <Bubble nickName={data.data.nickName} like={0} />
        <Ghost
          ghost={
            data.data.findEquippedItemsResponse.items.CHARACTER[0] ?? '/Ghost/DEVIL_GHOST.webp'
          }
        />
        {isOtherUser && (
          <>
            <Spacing className="h-12" />
            <Button
              variant="gray100"
              className="py-7.5 w-stretch flex w-[182px] items-center justify-center gap-1 bg-white px-3"
              right={<Icon type="next" color="black" size={18} />}
              onClick={goMyLibrary}
            >
              내 서재로 이동하기
            </Button>
          </>
        )}
      </CenterStack>
    </>
  );
};
