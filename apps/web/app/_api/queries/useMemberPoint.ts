import { useQuery } from '@tanstack/react-query';

import { member } from '../queryKey';

const useMemberPoint = () => {
  return useQuery(member.point());
};

export default useMemberPoint;
