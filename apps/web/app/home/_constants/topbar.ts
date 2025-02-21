export const TOP_BAR = {
  MISSION: {
    icon: '/TopBar/MISSION.webp',
    title: '미션하기',
    router: '/mission',
  },
  CLOSET: {
    icon: '/TopBar/CLOSET.webp',
    title: '꾸미기',
    router: '/closet',
  },
  STORE: {
    icon: '/TopBar/STORE.webp',
    title: '스토어',
    router: '/store',
  },
  share: {
    icon: '/TopBar/SHARE.webp',
    title: '자랑하기',
    router: '/share',
  },
} as const;

export const DRAWER_MENU = {
  HOME: {
    icon: 'home',
    title: '홈',
    router: '/',
  },
  SEARCH: {
    icon: 'search',
    title: '도서 검색',
    router: '/search',
  },
  STORE: {
    icon: 'shop',
    title: '스토어',
    router: '/store',
  },
  CLOSET: {
    icon: 'bag',
    title: '꾸미기',
    router: '/closet',
  },
  SHARE: {
    icon: 'setting',
    title: '설정',
    router: '/setting',
  },
} as const;
