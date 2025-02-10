import type { Meta, StoryObj } from '@storybook/react';
import { Button, ButtonElement } from '@repo/ui/Button';
import { Icon } from '@repo/ui/Icon';

const meta = {
  title: 'components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg'],
      control: { type: 'radio' },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    children: '버튼123',
  },
  render: (args) => <Button {...args} />,
};

export const WithIcon: Story = {
  args: {
    children: '버튼123',
    iconType: 'undo',
    variant: 'gray100',
  },
  render: (args) => <Button {...args} />,
};

export const WithButtonElement: Story = {
  args: {
    children: '버튼123',
    size: 'lg',
    right: <ButtonElement count={100} />,
  },
  render: ({ children, ...args }) => <Button {...args}>{children}</Button>,
};
