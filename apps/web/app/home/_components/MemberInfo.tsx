import { CenterStack } from '@repo/ui/components/Layout';
import { GetEquippedItemResponse } from 'app/_api/types/item';

import { Bubble } from './Bubble';
import { Ghost } from './Ghost';

type MemberInfoProps = {
  data?: GetEquippedItemResponse;
};
export const MemberInfo = ({ data }: MemberInfoProps) => {
  return (
    <>
      <CenterStack>
        <Bubble nickName={data?.data.nickName ?? '스부키'} like={10} />
        <Ghost
          ghost={
            data?.data.findEquippedItemsResponse.items.CHARACTER[0] ?? '/Ghost/DEVIL_GHOST.webp'
          }
        />
      </CenterStack>
    </>
  );
};
