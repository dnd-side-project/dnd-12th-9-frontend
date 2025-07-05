import { ROUTES } from 'app/_constants/route';

export const TOP_BAR = {
  MISSION: {
    icon: '/TopBar/MISSION.webp',
    title: '미션하기',
    router: ROUTES.MISSION,
  },
  CLOSET: {
    icon: '/TopBar/CLOSET.webp',
    title: '꾸미기',
    router: ROUTES.CLOSET,
  },
  STORE: {
    icon: '/TopBar/STORE.webp',
    title: '스토어',
    router: ROUTES.STORE,
  },
  share: {
    icon: '/TopBar/SHARE.webp',
    title: '자랑하기',
    router: ROUTES.PROFILE,
  },
} as const;

export const DRAWER_MENU = {
  SEARCH: {
    icon: 'search',
    title: '도서 검색',
    router: ROUTES.SEARCH,
  },
  STORE: {
    icon: 'shop',
    title: '스토어',
    router: ROUTES.STORE,
  },
  CLOSET: {
    icon: 'bag',
    title: '꾸미기',
    router: ROUTES.CLOSET,
  },
  // TODO : 추후 개시 예정
  // SHARE: {
  //   icon: 'setting',
  //   title: '설정',
  //   router: ROUTES.SETTING,
  // },
} as const;
