import React from 'react';
import { GradientButton } from './Button.style'; 

type ButtonProps = {
    children: React.ReactNode;
    onClick: () => void;
    };

const Button:React.FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <GradientButton onClick={onClick}>
      {children}
    </GradientButton>
  );
};

export default Button;
