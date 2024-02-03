import {
    Container,
    Title,
    Label,
    FormContainer,
} from './Login.style';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { validateEmail } from '../../utils/validateEmail';
import React from 'react';

const Login:React.FC = () => {

    const [email, setEmail] = React.useState<string>('');
    const [password, setPassword] = React.useState<string>('');

    return (
        <Container>
            <Title>USER LOGIN</Title>
            <FormContainer>
                <Label>Your Email</Label>
                <Input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    validateCallback={() => validateEmail(email)}
                />
                <Label >Your Password</Label>
                <Input
                    isPassword= {true}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}    
                />
                <Button onClick={() => {}}>Login</Button>
            </FormContainer>
        </Container>
    );
};

export default Login;
