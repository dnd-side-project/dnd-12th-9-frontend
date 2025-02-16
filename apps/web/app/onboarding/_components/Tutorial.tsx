import Image from 'next/image';

import { Button } from '@repo/ui/components/Button';
import { Flex } from '@repo/ui/components/Layout';

import { StepProps } from '../_types/step';

export const Tutorial = ({ onStepChange, config }: StepProps) => {
  const imageUrl = `/onboarding/${config.imageNumber}.png`;

  return (
    <Flex className="h-dvh w-full flex-col items-center justify-between overflow-hidden">
      <Image
        fill
        priority
        src={imageUrl}
        alt="튜토리얼 배경 이미지"
        className="absolute inset-0 z-0 object-cover md:hidden"
        style={{
          filter: 'blur(1px) brightness(0.98)',
        }}
      />
      <Flex className="relative h-full w-full flex-1">
        <Image
          fill
          priority
          src={imageUrl}
          alt="튜토리얼"
          className="object-contain"
          sizes="(max-width: 440px) 100vw, 440px"
        />
      </Flex>

      <Button size="lg" className="absolute bottom-4 md:w-[380px]" onClick={onStepChange}>
        {config.buttonText}
      </Button>
    </Flex>
  );
};
