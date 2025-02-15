import Image from 'next/image';

import { Button } from '@repo/ui/components/Button';
import { Flex } from '@repo/ui/components/Layout';

import { StepProps } from '../_types/step';

export const Tutorial = ({ onStepChange, config }: StepProps) => {
  const imageUrl = `/onboarding/${config.imageNumber}.png`;

  console.log('object', imageUrl);
  return (
    <Flex className="h-dvh flex-col items-center">
      <Image
        src={imageUrl}
        alt="튜토리얼"
        width={440}
        height={771}
        className="max-h-full w-full object-contain"
      />
      <Button
        size="lg"
        className="absolute bottom-5 mx-4 w-full max-w-[380px]"
        onClick={onStepChange}
      >
        {config.buttonText}
      </Button>
    </Flex>
  );
};
