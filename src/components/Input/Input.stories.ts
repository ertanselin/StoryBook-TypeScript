import type { Meta, StoryObj } from '@storybook/react';

import { Input } from './Input';

const meta = {
  title: 'Atoms/Input',
  component: Input,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Name: Story = {
  args: {
    type: 'text',
    label: 'Name',
    placeholder: 'Enter your name',
  },
};

export const Email: Story = {
  args: {
    type: 'e-mail',
    label: 'E-mail',
    placeholder: 'Enter your e-mail',
  }
}

export const password: Story = {
  args: {
    type: 'password',
    label: 'Password',
    placeholder: 'Enter your password',
  }
}






