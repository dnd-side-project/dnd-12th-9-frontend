import { Ghost, Code } from 'app/closet/_fixture/item';

import { ResponseFormat } from './response';

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
