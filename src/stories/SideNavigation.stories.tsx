import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { SideNavigation, SideNavigationProps } from './SideNavigation';
import { Home, Settings, Info, Contact } from 'lucide-react';
import '../styles/colors.css'; 

const withFullHeight = (Story: any) => (
  <div style={{ height: '40vh', position: 'relative' }}>
    <Story />
  </div>
); 

const meta: Meta<typeof SideNavigation> = {
  title: 'Components/SideNavigation',
  component: SideNavigation,
  tags: ['autodocs'],
  decorators: [withFullHeight],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary'],
      description: 'Color based on semantic token',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size variant of the sidebar',
    },
    orientation: {
      control: 'radio',
      options: ['vertical', 'horizontal'],
      description: 'Orientation of the sidebar',
    },
    collapsed: {
      control: 'boolean',
      description: 'Collapse sidebar (only affects vertical layout)',
    },
  },
};

export default meta;
type Story = StoryObj<typeof SideNavigation>;

const navItems = [
  { label: 'Home', icon: <Home /> },
  { label: 'Settings', icon: <Settings /> },
  { label: 'Contact', icon: <Contact /> },
  { label: 'About', icon: <Info />, disabled: true },
];

export const Default: Story = {
  args: {
    items: navItems,
    collapsed: false,
    size: 'md',
    color: 'tertiary',
    orientation: 'vertical',
    onSelect: (label) => alert(`Selected: ${label}`),
  } satisfies SideNavigationProps,
};

export const Collapsed: Story = {
  args: {
    items: navItems,
    collapsed: true,
    size: 'md',
    color: 'tertiary',
    orientation: 'vertical',
    onSelect: (label) => alert(`Selected: ${label}`),
  } satisfies SideNavigationProps,
};

export const Horizontal: Story = {
  args: {
    items: navItems,
    collapsed: false, // Ignored in horizontal mode
    size: 'md',
    orientation: 'horizontal',
    color: 'secondary',
    onSelect: (label) => alert(`Selected: ${label}`),
  } satisfies SideNavigationProps,
};

export const SmallSize: Story = {
  args: {
    items: navItems,
    size: 'sm',
    color: 'tertiary',
    orientation: 'vertical',
    collapsed: false,
  } satisfies SideNavigationProps,
};

export const LargeSize: Story = {
  args: {
    items: navItems,
    size: 'lg',
    color: 'tertiary',
    orientation: 'vertical',
    collapsed: false,
  } satisfies SideNavigationProps,
};
