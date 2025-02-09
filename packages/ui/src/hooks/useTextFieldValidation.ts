import { useCallback, useState } from 'react';

type ValidationProps = {
  value: string;
  minLength: number;
};

export function useTextFieldValidation({ value, minLength }: ValidationProps) {
  const [hasError, setHasError] = useState<boolean>(false);

  const validate = useCallback(() => {
    const isMinLengthValid = value.length > minLength;
    setHasError(!isMinLengthValid);
  }, [value, minLength]);

  const handleBlur = () => {
    validate();
  };

  return {
    hasError,
    handleBlur,
    validate,
  };
}
