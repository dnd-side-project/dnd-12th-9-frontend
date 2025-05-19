import type { Meta, StoryObj } from '@storybook/nextjs';
import { Text } from '@sbooky/ui/Text';

const meta = {
  title: 'components/Text',
  component: Text,
  tags: ['autodocs'],
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    type: 'Heading1',
    weight: 'semibold',
    children: 'Sbooky',
  },
  argTypes: {
    type: {
      options: [
        'Heading1',
        'Heading2',
        'Heading3',
        'Title1',
        'Title2',
        'Body1',
        'Body2',
        'caption',
      ],
      control: { type: 'select' },
    },
    weight: {
      options: ['regular', 'medium', 'semibold', 'bold'],
      control: { type: 'select' },
    },
  },
  render: (args) => <Text {...args} />,
};
