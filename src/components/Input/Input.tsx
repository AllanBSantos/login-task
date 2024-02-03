import React from 'react';
import { StyledInput } from './Input.style';

type InputProps = {
    placeholder?: string;
    isPassword?: boolean;
}

const Input: React.FC<InputProps> = ({ placeholder, isPassword = false }) => {
    const [value, setValue] = React.useState<string>('');
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }
    return ( 
    <StyledInput 
     value={value}
     placeholder={placeholder} 
     type={isPassword ? 'password' : 'text'} 
     onChange={handleChange} 
     />
     );
};

export default Input;
