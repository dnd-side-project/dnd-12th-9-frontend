import type { Meta, StoryObj } from '@storybook/react';
import { Chip } from '@repo/ui/Chip';
import { useState } from 'react';
import { Text } from '@repo/ui/Text';
import { Flex, VStack } from '@repo/ui/Layout';

const meta = {
  title: 'components/Chip',
  component: Chip,
  tags: ['autodocs'],
} satisfies Meta<typeof Chip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    variant: 'rounded',
    active: false,
    children: 'Chip',
    className: '',
  },
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['rounded', 'keyword', 'graphic', 'item'],
      },
    },
    active: { control: false },
    children: { control: false },
    className: { control: false },
  },

  render: (args) => {
    const [value, setValue] = useState<boolean>(args.active);

    return (
      <Chip {...args} active={value} onClick={() => setValue(!value)}>
        {args.children}
      </Chip>
    );
  },
};

type ReadingStatus = 'prev' | 'ing' | 'done';

const STATUS_DATA = {
  prev: {
    image: '/assets/blacky-prev.png',
    text: '읽기 전',
  },
  ing: {
    image: '/assets/blacky-ing.png',
    text: '읽는 중',
  },
  done: {
    image: '/assets/blacky-done.png',
    text: '완독',
  },
} as const;

export const Rounded: Story = {
  args: {
    variant: 'rounded',
    active: false,
    children: 'Chip',
    className: '',
  },
  render: (args) => {
    const [selectedText, setSelectedText] = useState<string | null>(null);

    return (
      <Flex className="gap-4">
        {Object.values(STATUS_DATA).map((data: { image: string; text: string }) => (
          <Chip
            key={data.text}
            {...args}
            active={selectedText === data.text}
            onClick={() => setSelectedText(selectedText === data.text ? null : data.text)}
          >
            {data.text}
          </Chip>
        ))}
      </Flex>
    );
  },
};

const KEYWORD_VARIANTS = [
  '몰입감 높은',
  '감동적인',
  '유익한',
  '추천하고 싶은',
  '도파민을 자극하는',
  '새로운 지식을 주는',
  '🧚🏻문장이 아름다운',
  '읽기 부담없는',
  '여운이 오래가는',
] as const;

export const Keyword: Story = {
  args: {
    variant: 'keyword',
    active: false,
    children: 'Chip',
    className: '',
  },
  render: (args) => {
    const [selectedKeywords, setSelectedKeywords] = useState<string[]>([]);

    const handleClickChip = (value: string) => {
      return selectedKeywords.includes(value)
        ? setSelectedKeywords(selectedKeywords.filter((selected) => selected !== value))
        : setSelectedKeywords([...selectedKeywords, value]);
    };

    return (
      <div className="flex flex-wrap gap-4">
        {KEYWORD_VARIANTS.map((keyword: string) => (
          <Chip
            {...args}
            value={keyword}
            active={selectedKeywords.includes(keyword)}
            onClick={() => handleClickChip(keyword)}
          >
            {keyword}
          </Chip>
        ))}
      </div>
    );
  },
};

export const Graphic: Story = {
  args: {
    variant: 'graphic',
    active: false,
    children: 'Chip',
    className: '',
  },
  render: (args) => {
    const [activeStatus, setActiveStatus] = useState<ReadingStatus | null>(null);

    return (
      <Flex className="gap-4">
        {Object.entries(STATUS_DATA).map(([status, data]) => (
          <Chip
            key={status}
            {...args}
            active={activeStatus === status}
            onClick={() => setActiveStatus(status as ReadingStatus)}
          >
            <VStack className="gap-2">
              <img src={data.image} alt={`blacky-${status}`} />
              <Text type="Title1" weight="medium">
                {data.text}
              </Text>
            </VStack>
          </Chip>
        ))}
      </Flex>
    );
  },
};
