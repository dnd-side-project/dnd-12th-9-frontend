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
  STORE: 'store',
  SETTING: 'setting',
} as const;

export const DYNAMIC_ROUTES = {
  // 책 상세 페이지
  BOOK_DETAIL: (id: string) => `${ROUTES.BOOKS}/${id}`,

  // 책 리뷰 페이지
  BOOK_REVIEW: (id: string) => `${ROUTES.BOOKS}/${id}/review`,
} as const;
