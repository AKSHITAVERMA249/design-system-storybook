import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { ProgressBar, ProgressBarProps } from './ProgressBar';

import '../styles/colors.css'; // Ensure the color tokens are available

const meta: Meta<typeof ProgressBar> = {
  title: 'Components/ProgressBar',
  component: ProgressBar,
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
      description: 'Progress value (0–100)',
    },
    color: {
      control: 'select',
      options: ['primary', 'success', 'warning', 'error'],
      description: 'Color based on semantic token',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size variant of the progress bar',
    },
    animated: {
      control: 'boolean',
      description: 'Whether the progress bar has animated stripes',
    },
  },
};

export default meta;
type Story = StoryObj<typeof ProgressBar>;

export const Default: Story = {
  args: {
    value: 60,
    color: 'primary',
    size: 'md',
    animated: false,
  },
};

export const Success: Story = {
  args: {
    value: 80,
    color: 'success',
    size: 'md',
    animated: true,
  },
};

export const Warning: Story = {
  args: {
    value: 45,
    color: 'warning',
    size: 'lg',
    animated: true,
  },
};

export const Error: Story = {
  args: {
    value: 30,
    color: 'error',
    size: 'sm',
    animated: false,
  },
};

export const Accessible: Story = {
  args: {
    value: 70,
    color: 'primary',
    size: 'md',
    animated: false,
  },
  parameters: {
    accessibility: {
      description: 'Uses ARIA roles and labels for screen readers',
    },
  },
};
