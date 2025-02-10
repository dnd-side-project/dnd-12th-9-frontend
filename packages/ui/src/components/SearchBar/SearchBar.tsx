import { ComponentProps } from 'react';

import { Icon } from '../Icon';
import { Flex } from '../Layout';

type Props = {
  /**
   * Input value to display in the input field component.
   */
  value: string;
  /**
   * Function to call when the search button is clicked.
   */
  onClick: (value: string) => void;
  /**
   * Function to call when the reset button is clicked.
   * @default () => {}
   */
  onClickReset: () => void;
} & ComponentProps<'input'>;

export function SearchBar({ value, onClick, onClickReset, ...props }: Props) {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onClick(value);
    }
  };
  return (
    <Flex className="relative h-11 w-full rounded-lg bg-gray-100 px-3 py-[9px]">
      <input
        value={value}
        onKeyDown={handleKeyDown}
        className="w-full bg-gray-100 pr-14 outline-none"
        {...props}
      />
      {value.length > 0 && (
        <button
          className="absolute right-10 top-1/2 -translate-y-1/2 transform cursor-pointer outline-none"
          onClick={onClickReset}
        >
          <Icon type="remove" size={20} />
        </button>
      )}
      <button
        type="button"
        className="absolute right-2 top-1/2 -translate-y-1/2 transform cursor-pointer outline-none"
        onClick={() => onClick(value)}
      >
        <Icon type="search" size={28} color="gray-700" />
      </button>
    </Flex>
  );
}
