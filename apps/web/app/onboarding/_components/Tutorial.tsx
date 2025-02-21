import Image from 'next/image';

import { Button } from '@repo/ui/components/Button';
import { Flex } from '@repo/ui/components/Layout';

import { StepProps } from '../_types/step';

const backgroundImageGroups = ['00_BACK', '01_05_07_08_BACK', '02_03_BACK', '04_06_BACK'];

export const Tutorial = ({ onStepChange, config }: StepProps) => {
  const matchedBackground = backgroundImageGroups.find((group) =>
    group.includes(config.imageNumber)
  );

  const imageUrl = `/onboarding/${config.imageNumber}.webp`;
  const backgroundUrl = `/onboarding/${matchedBackground}.webp`;
  return (
    <Flex className="relative h-dvh w-full flex-col items-center justify-between overflow-hidden">
      <Image
        fill
        priority
        src={backgroundUrl}
        alt="튜토리얼 배경"
        placeholder="blur"
        blurDataURL={backgroundUrl}
        className="absolute inset-0 z-0 h-full object-cover md:hidden"
        style={{
          filter: 'blur(1px) ',
        }}
      />
      <Flex className="relative w-full flex-1">
        <Image
          fill
          priority
          src={imageUrl}
          blurDataURL={imageUrl}
          alt="튜토리얼"
          placeholder="blur"
          className="object-contain"
          sizes="(max-width: 440px) 100vw, 440px"
        />
      </Flex>

      <Button
        size="lg"
        className="absolute bottom-4 h-11 w-[77%] md:h-[52px] md:w-[380px]"
        onClick={onStepChange}
      >
        {config.buttonText}
      </Button>
    </Flex>
  );
};
