export const ROUTES = {
  ROOT: '/',
  BOOKS: '/books',
  CLOSET: '/closet',
  HOME: '/home',
  LOGIN: '/login',
  MISSION: '/mission',
  NICKNAME: '/nickname',
  ONBOARDING: '/onboarding',
  PROFILE: '/profile',
  SEARCH: '/search',
} as const;

export const DYNAMIC_ROUTES = {
  // 책 상세 페이지
  BOOK_DETAIL: (id: string) => `${ROUTES.BOOKS}/${id}`,

  // 검색 결과 페이지
  BOOK_REVIEW: (id: string) => `${ROUTES.BOOKS}/${id}/review`,
} as const;
