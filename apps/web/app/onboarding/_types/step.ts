export type StepProps = {
  onStepChange: () => void;
  config: {
    imageNumber: string;
    buttonText: string;
  };
};

export const FUNNEL_STEPS = [
  'Tutorial_0',
  'Tutorial_1',
  'Tutorial_2',
  'Tutorial_3',
  'Tutorial_4',
  'Tutorial_5',
  'Tutorial_6',
  'Tutorial_7',
  'Tutorial_8',
] as const;
