import { ReactElement, ReactNode, useMemo, useState } from 'react';

export type StepProps = {
  name: string;
  children: ReactNode;
};

export type FunnelProps = {
  children: Array<ReactElement<StepProps>>;
};

export const useFunnel = <T extends readonly string[]>(steps: T) => {
  const [step, setStep] = useState(steps[0]);

  const Step = ({ children }: StepProps) => {
    return children;
  };

  const FunnelComponent = ({ children }: FunnelProps) => {
    const targetStep = useMemo(
      () => children.find((childStep) => childStep.props.name === step) || children[0],
      [children]
    );

    return <>{targetStep}</>;
  };

  const Funnel = Object.assign(FunnelComponent, { Step });

  return { Funnel, setStep, currentStep: step };
};
