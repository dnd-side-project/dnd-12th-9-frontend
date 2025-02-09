import type { Meta, StoryObj } from '@storybook/react';
import { TextField } from '@repo/ui/TextField';
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
    placeholder: 'placeholder',
    onClickReset: () => {},
    errorMessage: '최소 한 자 이상 입력해주세요.',
  },
  argTypes: {
    value: {
      control: { type: 'text' },
    },
    placeholder: {
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
        placeholder="책 제목을 입력해주세요."
        onChange={(e) => setValue(e.target.value)}
        onClickReset={() => setValue('')}
      />
    );
  },
};
