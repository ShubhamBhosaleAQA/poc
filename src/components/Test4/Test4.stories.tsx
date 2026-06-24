import type { Meta, StoryObj } from '@storybook/react-vite';
import Test4 from './Test4';

const meta = {
  title: 'Components/Test4',
  component: Test4,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    year: 2026,
    name: 'Shubham',
  },
} satisfies Meta<typeof Test4>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const EarlierYear: Story = {
  args: {
    year: 1999,
  },
};

export const WithoutName: Story = {
  args: {
    name: undefined,
  },
};
