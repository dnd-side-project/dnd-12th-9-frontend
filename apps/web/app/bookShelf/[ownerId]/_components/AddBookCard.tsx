import { Icon } from '@sbooky/ui/components/Icon';
import { Box, Center } from '@sbooky/ui/components/Layout';

export const AddBookCard = () => {
  return (
    <Box className="h-[204px] w-[106px]">
      <Center
        as="button"
        className="h-[156px] w-full rounded-lg border border-dashed border-gray-300"
      >
        <Icon type="plus" color="gray300" />
      </Center>
    </Box>
  );
};
