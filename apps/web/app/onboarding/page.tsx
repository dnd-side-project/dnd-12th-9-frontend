'use client';

import { useRouter } from 'next/navigation';

import { PageLayout } from '@repo/ui/components/Layout';
import { useFunnel } from 'app/_hooks/useFunnel';

import { Motion } from './_components/Motion';
import { Tutorial } from './_components/Tutorial';
import { FUNNEL_STEPS } from './_types/step';
import { TUTORIAL_CONFIG } from './constants/tutorial';

const OnBoardingPage = () => {
  const router = useRouter();
  const { Funnel, setStep } = useFunnel(FUNNEL_STEPS);

  const handleStepChange = (steps: string[], index: number) => {
    const nextStep = steps[index + 1];
    if (nextStep) return setStep(nextStep);
    router.push('/home?openOnboarding=true');
  };

  return (
    <PageLayout className="h-dvh">
      <Funnel>
        {Object.keys(TUTORIAL_CONFIG).map((step, index, steps) => (
          <Funnel.Step key={step} name={step}>
            <Motion>
              <Tutorial
                config={TUTORIAL_CONFIG[step as keyof typeof TUTORIAL_CONFIG]}
                onStepChange={() => handleStepChange(steps, index)}
              />
            </Motion>
          </Funnel.Step>
        ))}
      </Funnel>
    </PageLayout>
  );
};

export default OnBoardingPage;
