import Image from 'next/image';

import { Button } from '@repo/ui/components/Button';
import { Flex } from '@repo/ui/components/Layout';

import { StepProps } from '../_types/step';

export const Tutorial = ({ onStepChange, config }: StepProps) => {
  const imageUrl = `/onboarding/${config.imageNumber}.png`;

  return (
    <Flex className="relative min-h-screen w-full flex-col items-center justify-between overflow-hidden">
      <Flex className="relative h-full w-full flex-1">
        <Image src={imageUrl} alt="튜토리얼" fill priority className="object-contain" />
      </Flex>

      <Button
        size="lg"
        className="absolute bottom-4 mx-4 w-full max-w-[380px]"
        onClick={onStepChange}
      >
        {config.buttonText}
      </Button>
    </Flex>
  );
};
