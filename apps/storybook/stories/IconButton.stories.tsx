import type { Meta, StoryObj } from '@storybook/nextjs';
import { IconButton } from '@sbooky/ui/IconButton';

const meta = {
  title: 'ui/IconButton',
  component: IconButton,
  tags: ['autodocs'],
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    children: <div className="h-6 w-6">{'<'}</div>,
    className: 'border border-black',
  },
  render: (args) => <IconButton {...args} />,
};

export const WithText: Story = {
  args: {
    children: '완료',
    className: 'border border-black ',
  },
  render: (args) => <IconButton {...args} />,
};

export const asLeftElement: Story = {
  args: {
    children: '완료',
    className: 'absolute top-0 left-0 bg-orange-100',
  },
  render: (args) => (
    <div className="relative h-12 bg-orange-200">
      <IconButton {...args} />
    </div>
  ),
};

export const asRightElement: Story = {
  args: {
    children: '완료',
    className: 'absolute top-0 right-0 bg-orange-100',
  },
  render: (args) => (
    <div className="relative h-12 bg-orange-200">
      <IconButton {...args} />
    </div>
  ),
};
