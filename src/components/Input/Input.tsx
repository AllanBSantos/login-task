import React from 'react';
import { StyledInput, OpenedEyeIcon, ClosedEyeIcon, Container } from './Input.style';

type InputProps = {
    value?: string;
    placeholder?: string;
    isPassword?: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    validateCallback?: () => boolean;
}

const Input: React.FC<InputProps> = ({ 
    placeholder, 
    isPassword = false, 
    value, 
    onChange,
    validateCallback, 
}) => {
    const [isPasswordVisible, setIsPasswordVisible] = React.useState<boolean>(false);
    const [isValid, setIsValid] = React.useState<boolean>(true);

    const handleValidation = () => {
        if (!validateCallback) return true;
        const inputValid = validateCallback();
        setIsValid(inputValid);
    }

    return ( 

    <Container>
        <StyledInput 
         value={value}
         placeholder={placeholder} 
         type={isPassword && isPasswordVisible ? 'password' : 'text'} 
         onChange={onChange}
         onBlur={() => handleValidation()}
         className={isValid ? '' : 'error'}
         />
       { isPassword 
       && (isPasswordVisible ? <OpenedEyeIcon  onClick={()=>setIsPasswordVisible(!isPasswordVisible)} />
       : <ClosedEyeIcon onClick={()=>setIsPasswordVisible(!isPasswordVisible)} />
       )}
     </Container>
     );
};

export default Input;
