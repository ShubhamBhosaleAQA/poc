import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { Button } from './Button';

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: { control: 'text' },
    onClick: { action: 'click' },
    variant: { control: 'radio', options: ['primary', 'secondary'] },
    size: { control: 'radio', options: ['sm', 'md', 'lg'] },
    fullWidth: { control: 'boolean' },
    color: { control: 'color', description: 'Text color override' },
  },
  args: {
    children: 'Button',
    onClick: fn(),
    variant: 'primary',
    size: 'md',
    fullWidth: false,
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const CustomColor: Story = {
  args: {
    color: '#e44a4a',
    children: 'Custom Color Button',
  },
};
