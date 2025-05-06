export const ROUTES = {
  ROOT: '/',
  CLOSET: '/closet',
  HOME: '/home',
  LOGIN: '/',
  MISSION: '/mission',
  NICKNAME: '/nickname',
  ONBOARDING: '/onboarding',
  PROFILE: '/profile',
  SEARCH: '/search',
  STORE: '/store',
  SETTING: '/setting',
} as const;

export const DYNAMIC_ROUTES = {
  // 책 상세 페이지
  BOOK_DETAIL: (id: string) => `/books/${id}`,

  // 책 리뷰 페이지
  BOOK_REVIEW: (id: string) => `/books/${id}/review`,

  // 책장 페이지
  BOOK_SHELF: (ownerId: string) => `/bookShelf/${ownerId}`,
} as const;
