import type { Meta, StoryObj } from '@storybook/nextjs';
import { SearchBar } from '@sbooky/ui/SearchBar';
import { useState } from 'react';

const meta = {
  title: 'components/SearchBar',
  component: SearchBar,
  tags: ['autodocs'],
} satisfies Meta<typeof SearchBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    value: '',
    onClick: () => {},
    onClickReset: () => {},
  },
  argTypes: {
    value: {
      control: { type: 'text' },
    },
    onClickReset: {
      control: false,
    },
    onClick: {
      control: false,
    },
  },
  render: (args) => {
    const [value, setValue] = useState<string>(args.value);

    return (
      <SearchBar
        value={value}
        onClick={args.onClick}
        onClickReset={() => setValue('')}
        onChange={(e) => setValue(e.target.value)}
      />
    );
  },
};
