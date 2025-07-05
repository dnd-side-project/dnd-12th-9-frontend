export const getUserType = (memberId: string, myMemberId?: string) => {
  if (myMemberId === undefined) {
    return 'GUEST';
  }

  if (memberId === myMemberId) {
    return 'OWNER';
  }

  return 'OTHER';
};

export type UserType = ReturnType<typeof getUserType>;
