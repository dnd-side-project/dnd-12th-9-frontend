export type Code =
  | 'mummy_ghost'
  | 'basic_ghost'
  | 'cat_ghost'
  | 'wizard_ghost'
  | 'detective_ghost'
  | 'littleprince_ghost'
  | 'frankenstein_ghost'
  | 'redhood_ghost'
  | 'cheese_cat_ghost'
  | 'siamese_cat_ghost'
  | 'baekdo_cat_ghost';

export type Ghost = {
  name: string;
  code: Code;
};

export const GHOST_LIST = [
  {
    name: '떠돌이 유령',
    code: 'mummy_ghost',
  },
  {
    name: '유령',
    code: 'basic_ghost',
  },
  {
    name: '고양이 유령',
    code: 'cat_ghost',
  },
  {
    name: '마법사 유령',
    code: 'wizard_ghost',
  },
  {
    name: '명탐정 유령',
    code: 'detective_ghost',
  },
  {
    name: '어린왕자 유령',
    code: 'littleprince_ghost',
  },
  {
    name: '프랑켄슈타인 유령',
    code: 'frankenstein_ghost',
  },
  {
    name: '빨간망토 유령',
    code: 'redhood_ghost',
  },
  {
    name: '치즈 고양이 유령',
    code: 'cheese_cat_ghost',
  },
  {
    name: '샴 고양이 유령',
    code: 'siamese_cat_ghost',
  },
  {
    name: '백도 고양이 유령',
    code: 'baekdo_cat_ghost',
  },
] as const satisfies Ghost[];
