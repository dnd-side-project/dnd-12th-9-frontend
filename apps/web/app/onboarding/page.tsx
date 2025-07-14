'use client';

import { useRouter, useSearchParams } from 'next/navigation';

import { Suspense } from 'react';

import { PageLayout } from '@sbooky/ui/components/Layout';
import { DYNAMIC_ROUTES } from 'app/_constants/route';
import { useFunnel } from 'app/_hooks/useFunnel';

import { Motion } from './_components/Motion';
import { Tutorial } from './_components/Tutorial';
import { FUNNEL_STEPS } from './_types/step';
import { TUTORIAL_CONFIG } from './constants/tutorial';

// https://nextjs.org/docs/messages/missing-suspense-with-csr-bailout
// useSearchParams를 위해서는 Suspense가 필요
const onBoardingWrapper = () => {
  return (
    <Suspense>
      <OnBoardingPage />
    </Suspense>
  );
};

const OnBoardingPage = () => {
  const router = useRouter();
  const { Funnel, setStep } = useFunnel(FUNNEL_STEPS);

  const searchParams = useSearchParams();
  const memberId = searchParams.get('memberId') ?? '';

  const handleStepChange = (steps: string[], index: number) => {
    const nextStep = steps[index + 1];
    if (nextStep) return setStep(nextStep);
    router.push(`${DYNAMIC_ROUTES.USER(memberId)}?openOnboarding=true`);
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

export default onBoardingWrapper;
