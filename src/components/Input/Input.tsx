import React from 'react';
import { StyledInput, OpenedEyeIcon, ClosedEyeIcon, Container } from './Input.style';

type InputProps = {
    placeholder?: string;
    isPassword?: boolean;
}

const Input: React.FC<InputProps> = ({ placeholder, isPassword = false }) => {
    const [value, setValue] = React.useState<string>('');
    const [isPasswordVisible, setIsPasswordVisible] = React.useState<boolean>(false);
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }
    return ( 
    <Container>
        <StyledInput 
         value={value}
         placeholder={placeholder} 
         type={isPassword && isPasswordVisible ? 'password' : 'text'} 
         onChange={handleChange} 
         />
       { isPassword 
       && (isPasswordVisible ? <ClosedEyeIcon onClick={()=>setIsPasswordVisible(!isPasswordVisible)} />
       : <OpenedEyeIcon onClick={()=>setIsPasswordVisible(!isPasswordVisible)} />
       )
       }
     </Container>
     );
};

export default Input;
