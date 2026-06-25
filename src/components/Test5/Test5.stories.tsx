import type { Meta, StoryObj } from '@storybook/react-vite';
import Test5 from './Test5';

const meta = {
  title: 'Components/Test5',
  component: Test5,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    year: 2026,
    name: 'Shubham',
  },
} satisfies Meta<typeof Test5>;

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