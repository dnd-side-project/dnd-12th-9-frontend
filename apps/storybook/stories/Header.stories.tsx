import type { Meta, StoryObj } from '@storybook/react';
import { Header, HeaderLeftElement, HeaderRightElement } from '@repo/ui/Header';

const meta = {
  title: 'ui/Header',
  component: Header,
  tags: ['autodocs'],
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    children: '타이틀',
    className: 'border border-grey-200',
  },
  render: (args) => <Header {...args} />,
};

export const BasicWithBottom: Story = {
  args: {
    children: '타이틀',
    borderBottom: true,
  },
  render: (args) => <Header {...args} />,
};

export const hasLeftElement: Story = {
  args: {
    children: '타이틀',
    className: 'border border-grey-200',
    left: <HeaderLeftElement>{'<'}</HeaderLeftElement>,
  },
  render: (args) => <Header {...args} />,
};

export const hasRightElement: Story = {
  args: {
    children: '타이틀',
    className: 'border border-grey-200',
    right: <HeaderRightElement>완료</HeaderRightElement>,
  },
  render: (args) => <Header {...args} />,
};

export const hasAllElement: Story = {
  args: {
    children: '타이틀',
    className: 'border border-grey-200',
    left: <HeaderLeftElement>{'<'}</HeaderLeftElement>,
    right: <HeaderRightElement>완료</HeaderRightElement>,
  },
  render: (args) => <Header {...args} />,
};
