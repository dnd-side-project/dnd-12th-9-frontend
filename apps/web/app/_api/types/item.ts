import { ResponseFormat } from './response';

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

export type GetItemListAPIResponse = ResponseFormat<{
  items: {
    [key in 'CHARACTER']: Ghost[];
  };
}>;

export type GetEquippedItemResponse = ResponseFormat<{
  items: {
    [key in 'CHARACTER']: Code[];
  };
}>;

export type UpdateEquippedItemAPIRequest = {
  equippedItemCode: string;
  toEquipItemCode: string;
};
