import Image from 'next/image';

import { Button } from '@repo/ui/components/Button';
import { Box, Flex } from '@repo/ui/components/Layout';

import { StepProps } from '../_types/step';

export const Tutorial = ({ onStepChange, config }: StepProps) => {
  const imageUrl = `/onboarding/${config.imageNumber}.png`;

  return (
    <Flex className="relative h-dvh max-w-full flex-col items-center justify-between overflow-hidden">
      <Box
        className="absolute inset-0 z-0 w-full bg-opacity-70 bg-contain bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundPosition: '50% 50%',
          filter: 'blur(4px) brightness(0.95)',
        }}
      />
      <Flex className="relative h-full w-full flex-1">
        <Image
          src={imageUrl}
          alt="튜토리얼"
          fill
          priority
          className="object-contain md:object-contain"
          sizes="(max-width: 440px) 100vw, 440px"
        />
      </Flex>

      <Button size="lg" className="absolute bottom-4 md:w-[380px]" onClick={onStepChange}>
        {config.buttonText}
      </Button>
    </Flex>
  );
};
