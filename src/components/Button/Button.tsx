import React from 'react';
import { GradientButton } from './Button.style'; 
import ReactLoading from 'react-loading';

type ButtonProps = {
    children: React.ReactNode;
    onClick?: () => void;
    type?: 'submit' | 'button';
    loading?: boolean;
    };

const Button:React.FC<ButtonProps> = ({ children, type, loading, onClick }) => {
  return (
    <GradientButton 
      onClick={onClick} 
      type={type} 
      disabled={loading}  
     
    >
      { loading 
        ? <ReactLoading data-testid="loading-indicator" type='spin' height={25} width={25} /> 
        : children}
    </GradientButton>
  );
};

export default Button;
