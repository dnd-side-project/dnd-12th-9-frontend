import { Button } from '@repo/ui/components/Button';
import { JustifyEnd } from '@repo/ui/components/Layout';

import { StepProps } from '../_types/step';

export const Tutorial = ({ onStepChange, config }: StepProps) => {
  const imageUrl = `/onboarding/${config.imageNumber}.png`;
  return (
    <JustifyEnd
      className="h-dvh flex-col items-center bg-[image:var(--image-url)] bg-contain bg-center bg-no-repeat"
      style={{ '--image-url': `url(${imageUrl})` }}
    >
      <Button size="lg" className="mb-4 w-full max-w-[380px]" onClick={onStepChange}>
        {config.buttonText}
      </Button>
    </JustifyEnd>
  );
};
