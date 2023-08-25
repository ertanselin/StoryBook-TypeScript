import React from 'react';
import { Meta, StoryObj  } from '@storybook/react';
import LoginPage from './LoginPage';
import './loginpage.css'



const meta: Meta<typeof LoginPage> = {
  component: LoginPage,
};

export default meta;
type Story = StoryObj <typeof LoginPage>;


export const Simple: Story = {
  title: 'Pages/LoginPage',
  component: LoginPage,
  parameters: {
    layout: 'fullscreen',
  },
};

