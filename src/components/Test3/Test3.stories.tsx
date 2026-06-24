import type { Meta, StoryObj } from '@storybook/react-vite';
import Test3 from './Test3';

const meta = {
  title: 'Components/Test3',
  component: Test3,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    name: 'Shubham',
    age: 28,
  },
} satisfies Meta<typeof Test3>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithoutAge: Story = {
  args: {
    age: undefined,
  },
};
