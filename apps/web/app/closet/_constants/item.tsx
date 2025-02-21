import { Code, Ghost } from 'app/_api/types/item';

export const GHOST_MAP = {
  mummy_ghost: {
    name: '떠돌이 유령',
    code: 'mummy_ghost',
  },
  basic_ghost: {
    name: '유령',
    code: 'basic_ghost',
  },
  cat_ghost: {
    name: '고양이 유령',
    code: 'cat_ghost',
  },
  wizard_ghost: {
    name: '마법사 유령',
    code: 'wizard_ghost',
  },
  detective_ghost: {
    name: '명탐정 유령',
    code: 'detective_ghost',
  },
  littleprince_ghost: {
    name: '어린왕자 유령',
    code: 'littleprince_ghost',
  },
  frankenstein_ghost: {
    name: '프랑켄슈타인 유령',
    code: 'frankenstein_ghost',
  },
  redhood_ghost: {
    name: '빨간망토 유령',
    code: 'redhood_ghost',
  },
  cheese_cat_ghost: {
    name: '치즈 고양이 유령',
    code: 'cheese_cat_ghost',
  },
  siamese_cat_ghost: {
    name: '샴 고양이 유령',
    code: 'siamese_cat_ghost',
  },
  baekdo_cat_ghost: {
    name: '백도 고양이 유령',
    code: 'baekdo_cat_ghost',
  },
  devil_ghost: {
    name: '악마 유령',
    code: 'devil_ghost',
  },
  angel_ghost: {
    name: '천사 유령',
    code: 'angel_ghost',
  },
  baby_ghost: {
    name: '아기 유령',
    code: 'baby_ghost',
  },
  dev_ghost: {
    name: '개발자 유령',
    code: 'dev_ghost',
  },
  hero_ghost: {
    name: '영웅 유령',
    code: 'hero_ghost',
  },
  lady_ghost: {
    name: '여자 유령',
    code: 'lady_ghost',
  },
  samurai_ghost: {
    name: '사무라이 유령',
    code: 'samurai_ghost',
  },
} satisfies Record<Code, Ghost>;

export const BASIC_GHOST = GHOST_MAP['basic_ghost'] satisfies Ghost;
