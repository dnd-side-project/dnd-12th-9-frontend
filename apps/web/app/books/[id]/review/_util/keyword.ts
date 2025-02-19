import { KeywordType } from '../_constants/keyword';

export const getTitleByKeywordType = (type: KeywordType) => {
  const TYPE_TO_TITLE = {
    UNDEFINED: '기타',
    GOOD: '좋았어요',
    SHAME: '아쉬워요',
  };

  return TYPE_TO_TITLE[type] ?? TYPE_TO_TITLE.UNDEFINED;
};

export const getImageURLByKeyword = (keyword: string) => `/Chip/${keyword}.png`;
