import {
    Container,
    Title,
    Label,
    FormContainer,
    ErrorLabel,
} from './Login.style';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { validateEmail } from '../../utils/validateEmail';
import React, { useContext } from 'react';

import AuthContext from '../../context/AuthContext';

const Login:React.FC = () => {
    const [email, setEmail] = React.useState<string>('');
    const [password, setPassword] = React.useState<string>('');
    const [error, setError] = React.useState<string>('');
    const [loading, setLoading] = React.useState<boolean>(false);
    const auth = useContext(AuthContext);

    const validateFields = () => {

        const validEmail =  validateEmail(email)
        if(!email || !password){
            setError('Please fill your email and password')
            return
        }
        if(!validEmail){
            setError('Email is not valid')
            return
        }
    }

    const handleSubmit = async () => {
        setLoading(true)
        setError('')
        validateFields()
        try {
          const result = await auth.login({email, password})
            if(result?.error){
                setError(result.error)
            }
        } catch (error) {
            console.error('error', error)
        } finally {
            setLoading(false)
        }
    }

    return (
        <Container>
            <Title>USER LOGIN</Title>
            <FormContainer  onSubmit={e => {
                e.preventDefault();
                handleSubmit()
                }}>
                <Label>Your Email</Label>
                <Input
                    value={email}
                    onChange={(e) => { setError(''); setEmail(e.target.value)}}
                    validateCallback={() => validateEmail(email)}
                />
                <Label >Your Password</Label>
                <Input
                    isPassword= {true}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}    
                />
                <Button type="submit" loading={loading} >Login</Button>
            </FormContainer>
           { error &&  <ErrorLabel>{error}</ErrorLabel>}
        </Container>
    );
};

export default Login;
