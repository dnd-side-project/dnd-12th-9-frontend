import type { Meta, StoryObj } from '@storybook/nextjs';
import { Icon } from '@sbooky/ui/Icon';
import { IconColor, IconList, IconType } from '@sbooky/ui/Icon/assets';

const meta = {
  title: 'components/icon',
  component: Icon,
  parameters: {
    layout: 'padded',
  },
  decorators: [
    (Story) => (
      <div className="gap-5xs flex flex-col">
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof Icon>;

export const Basic: Story = {
  args: {
    size: 24,
    color: 'gray300',
  },
  argTypes: {
    type: {
      control: false,
    },
    size: {
      control: {
        type: 'number',
        min: 10,
        max: 100,
        step: 1,
      },
    },
    color: {
      control: {
        type: 'select',
        options: IconColor,
      },
    },
  },

  render: (args) => (
    <div className="flex flex-row flex-wrap gap-2">
      {IconList.map((icon) => (
        <div key={icon} className="flex-shrink-0">
          <Icon type={icon} size={args.size} color={args.color} />
        </div>
      ))}
    </div>
  ),
};
