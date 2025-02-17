import Image from 'next/image';

import { Box, Stack } from '@repo/ui/components/Layout';
import { Text } from '@repo/ui/components/Text';

type ItemCardProps = {
  name: string;
  code: string;
};

export const ItemCard = ({ name, code }: ItemCardProps) => {
  return (
    <Stack className="gap-2">
      <Box className="py-2.5">
        <Image width={100} height={100} src={getImageUrl(code)} alt={name} />
      </Box>
      <Text weight="semibold" type="Title2" className="text-center text-gray-700">
        {name}
      </Text>
    </Stack>
  );
};

//TODO code로 프론트 이미지 url 추출
const getImageUrl = (code: string) => code;
