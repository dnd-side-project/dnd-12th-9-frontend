import { useQuery } from '@tanstack/react-query';

import { CenterStack } from '@repo/ui/components/Layout';
import { itemQueryOptions } from 'app/_api/queries/item';

import { Bubble } from './Bubble';
import { Ghost } from './Ghost';

export const MemberInfo = () => {
  const { data } = useQuery(itemQueryOptions.equipped());

  return (
    <>
      <CenterStack>
        <Bubble nickName={data?.data.nickName ?? '스부키'} like={10} />
        <Ghost
          ghost={
            data?.data.findEquippedItemsResponse.items.CHARACTER[0] ?? '/Ghost/DEVIL_GHOST.png'
          }
        />
      </CenterStack>
    </>
  );
};
