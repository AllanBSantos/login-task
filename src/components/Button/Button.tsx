import React from 'react';
import { GradientButton, LoadingIcon } from './Button.style'; 

type ButtonProps = {
    children: React.ReactNode;
    onClick?: () => void;
    type?: 'submit' | 'button';
    loading?: boolean;
    };

const Button:React.FC<ButtonProps> = ({ children, type, loading, onClick }) => {
  return (
    <GradientButton onClick={onClick} type={type} disabled={loading}  >
      { loading 
        ? <LoadingIcon type="spin" height={25} width={25} /> 
        : children}
    </GradientButton>
  );
};

export default Button;
