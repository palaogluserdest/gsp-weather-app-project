import React, { FC } from 'react';
import './styles.scss';

type ButtonProps = {
  children: React.ReactNode;
  type?: 'submit' | 'reset' | 'button' | undefined;
  className?: string;
};

const Button: FC<ButtonProps> = ({ children, type, className }) => {
  return (
    <button type={type} className={`btn ${className}`}>
      {children}
    </button>
  );
};

export default Button;
