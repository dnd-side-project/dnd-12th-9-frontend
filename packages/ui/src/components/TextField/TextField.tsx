import { ComponentProps } from 'react';

import { useTextFieldValidation } from '../../hooks/useTextFieldValidation';
import { Icon } from '../Icon';
import { Center, Flex } from '../Layout';
import { Text } from '../Text';

type Props = {
  /**
   * Input value to display in the input field component.
   */
  value: string;
  /**
   * Function to call when the reset button is clicked.
   */
  onClickReset: () => void;
  /**
   * Placeholder text to display in the input field component.
   * @default ''
   */
  placeholder?: string;
  /**
   * Error message to display when validation fails.
   * @default ''
   */
  errorMessage?: string;
  /**
   * Minimum length of the input value.
   * @default 1
   */
  minLength?: number;
  /**
   * Maximum length of the input value.
   * @default 10
   */
  maxLength?: number;
} & ComponentProps<'input'>;

export function TextField({
  value,
  onClickReset,
  placeholder = '',
  errorMessage = '',
  minLength = 1,
  maxLength = 10,
  ...props
}: Props) {
  const { hasError, handleBlur } = useTextFieldValidation({
    value,
    minLength,
  });

  return (
    <Flex className="flex-col items-start">
      <Center className="relative">
        <input
          value={value}
          placeholder={placeholder}
          maxLength={maxLength}
          className="h-11 w-[272px] rounded-lg py-[9px] pl-3 pr-10 text-gray-900 outline-none outline outline-1 outline-gray-200 transition-colors placeholder:text-gray-300"
          onBlur={handleBlur}
          {...props}
        />
        {value && (
          <div
            className="absolute right-3 top-1/2 -translate-y-1/2 transform cursor-pointer"
            onClick={onClickReset}
          >
            <Icon type="remove" size={20} />
          </div>
        )}
      </Center>
      <div className="relative min-h-[20px] w-[272px]">
        {hasError && (
          <Text type="caption" className="mt-1 text-red-500">
            {errorMessage || `최소 ${minLength}자 이상 입력해주세요.`}
          </Text>
        )}
        <span className="absolute right-0">
          <Text type="caption" className="black">
            {value.length}
          </Text>
          <Text type="caption" className="text-gray-400">
            /{maxLength}
          </Text>
        </span>
      </div>
    </Flex>
  );
}
