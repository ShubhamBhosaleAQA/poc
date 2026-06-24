import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { PromoCard } from './PromoCard';

const meta = {
  title: 'Components/PromoCard',
  component: PromoCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    color: { control: 'color', description: 'Optional card background color' },
  },
  args: {
    title: 'Try premium plan',
    description: 'Unlock advanced analytics and unlimited dashboards for your team.',
    ctaText: 'Upgrade now',
    onCtaClick: fn(),
  },
} satisfies Meta<typeof PromoCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const SecondaryCta: Story = {
  args: {
    ctaVariant: 'secondary',
    ctaText: 'Learn more',
  },
};

export const FullWidthCta: Story = {
  args: {
    ctaFullWidth: true,
    ctaText: 'Start free trial',
  },
  parameters: {
    layout: 'padded',
  },
};

export const CustomBackground: Story = {
  args: {
    color: '#f0f7ff',
  },
};
