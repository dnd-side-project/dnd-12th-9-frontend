'use client';

import { useFunnel } from 'app/hooks/useFunnel';

import { Motion } from './_components/Motion';
import { Tutorial } from './_components/Tutorial';
import { FUNNEL_STEPS } from './_types/step';
import { TUTORIAL_CONFIG } from './constants/tutorial';

const OnBoardingPage = () => {
  const { Funnel, setStep } = useFunnel(FUNNEL_STEPS);

  return (
    <>
      <Funnel>
        {Object.keys(TUTORIAL_CONFIG).map((step, index, steps) => (
          <Funnel.Step key={step} name={step}>
            <Motion>
              <Tutorial
                config={TUTORIAL_CONFIG[step as keyof typeof TUTORIAL_CONFIG]}
                onStepChange={() => {
                  const nextStep = steps[index + 1];
                  if (nextStep) setStep(nextStep);
                }}
              />
            </Motion>
          </Funnel.Step>
        ))}
      </Funnel>
    </>
  );
};

export default OnBoardingPage;
