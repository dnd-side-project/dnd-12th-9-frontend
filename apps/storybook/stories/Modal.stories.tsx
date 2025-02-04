import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from '@repo/ui/Modal';
import { useState } from 'react';

const meta = {
  title: 'components/Modal',
  component: Modal,
  tags: ['autodocs'],
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    isOpen: false,
    onClickOutside: () => {},
    children: '',
  },
  render: (args) => {
    const [isOpen, setIsOpen] = useState<boolean>(args.isOpen);
    const onClickOutside = () => setIsOpen((prev) => !prev);

    return (
      <>
        <button onClick={onClickOutside}>Open Modal</button>
        <Modal {...args} isOpen={isOpen} onClickOutside={onClickOutside}>
          <div className="flex flex-col items-center justify-center gap-2">
            <h1 className="text-center text-xl font-semibold">이미 등록된 책입니다.</h1>
            <span className="mb-4 whitespace-pre-line text-center text-base font-normal text-gray-400">
              {`책장에 같은 책이 존재합니다.\n다시 등록하시겠어요?`}
            </span>
            <button
              onClick={onClickOutside}
              className="h-12 w-full rounded-xl bg-gray-100 text-gray-400"
            >
              닫기
            </button>
          </div>
        </Modal>
      </>
    );
  },
};
