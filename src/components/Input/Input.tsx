import React from 'react';

interface InputProps {
  type: string;
  label: string;
  placeholder?: string;
}

export const Input = ({
  type = 'text',
  label = "Name",
  placeholder = "Please enter your name",
}: InputProps) => {
  return (
    <div className="input-container">
      <label htmlFor={label}>{label}</label>
      <input
        type={type}
        id={label}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
