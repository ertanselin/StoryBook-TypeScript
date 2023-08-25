import React from 'react';
import { Story } from '@storybook/react';
import LoginPage from './LoginPage';

export default {
  title: 'Example/LoginPage',
  component: LoginPage,
  parameters: {
    layout: 'centered',
  },
};

const Template: Story = () => <LoginPage />;

export const Default = Template.bind({});
