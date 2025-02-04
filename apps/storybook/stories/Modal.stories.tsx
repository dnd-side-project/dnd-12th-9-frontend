import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from '@repo/ui/Modal';

import { useModal } from '@repo/ui/hooks/useModal';

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
    children: 'Modal Content',
  },
  argTypes: {
    isOpen: {
      control: false,
    },
    onClickOutside: {
      control: false,
    },
    children: {
      control: false,
    },
  },
  render: () => {
    const { isOpen, openModal, closeModal } = useModal();

    return (
      <>
        <button onClick={openModal}>Open Modal</button>
        <Modal isOpen={isOpen} onClickOutside={closeModal}>
          <div className="flex flex-col items-center justify-center gap-2">
            <h1 className="text-center text-xl font-semibold">이미 등록된 책입니다.</h1>
            <span className="mb-4 whitespace-pre-line text-center text-base font-normal text-gray-400">
              {`책장에 같은 책이 존재합니다.\n다시 등록하시겠어요?`}
            </span>
            <button
              onClick={closeModal}
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
