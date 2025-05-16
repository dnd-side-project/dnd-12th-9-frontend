import type { Meta, StoryObj } from '@storybook/nextjs';
import { TextField } from '@sbooky/ui/TextField';
import { useState } from 'react';

const meta = {
  title: 'components/TextField',
  component: TextField,
  tags: ['autodocs'],
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    value: '',
    onClickReset: () => {},
    onBlur: () => {},
    errorMessage: '최소 한 자 이상 입력해주세요.',
    minLength: 1,
    maxLength: 10,
  },
  argTypes: {
    value: {
      control: { type: 'text' },
    },
    onClickReset: {
      control: false,
    },
    errorMessage: {
      control: false,
    },
  },
  render: (args) => {
    const [value, setValue] = useState<string>(args.value);
    return (
      <TextField
        value={value}
        onClickReset={() => setValue('')}
        onChange={(e) => setValue(e.target.value)}
        placeholder="책 제목을 입력해주세요."
        minLength={args.minLength}
        maxLength={args.maxLength}
      />
    );
  },
};
