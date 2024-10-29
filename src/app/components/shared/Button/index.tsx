import React, { FC } from 'react';
import './styles.scss';

type ButtonProps = {
  children: React.ReactNode;
  type?: 'submit' | 'reset' | 'button' | undefined;
  className?: string;
  onClick?: () => void;
};

const Button: FC<ButtonProps> = ({ children, type, className, onClick }) => {
  return (
    <button type={type} className={`btn ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
