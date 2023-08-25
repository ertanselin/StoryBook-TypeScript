import React from 'react';
import Input from '../Input/Input';
import { Button } from '../../stories/Button';

interface LoginPageProps {
  title: string;
  
}

const LoginPage: React.FC = () => {
  const handleLogin = () => {
    // Giriş işlemlerini burada gerçekleştir
  };

  return (
    <div>
      <h2>Login Page</h2>
      <Input label="Username" type="text" placeholder="Enter your username" />
      <Input label="Password" type="password" placeholder="Enter your password" />
      <Button primary label="Login" onClick={handleLogin} />
    </div>
  );
};

export default LoginPage;
