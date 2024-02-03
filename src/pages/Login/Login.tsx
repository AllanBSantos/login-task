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
import React, { useEffect } from 'react';
import LoginMutation from '../../graphql/mutations/LoginMutation';
import { useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-dom';

const Login:React.FC = () => {



    const [email, setEmail] = React.useState<string>('');
    const [password, setPassword] = React.useState<string>('');
    const [error, setError] = React.useState<string>('');
    const [login, { data, loading, error: mutationError }] = useMutation(LoginMutation);
    const navigate = useNavigate();

    useEffect(() => {
        if (mutationError){
            const exception : any = mutationError?.graphQLErrors[0]?.extensions?.exception
            const errorMessage = exception?.data?.data[0].messages[0].message
            if(errorMessage){
                setError(errorMessage)
            }
        }
        if(data){
            localStorage.setItem('token', data.login.jwt) //change this to more safe option
            navigate('/account')
        }
       }, [data, mutationError]);


    const handleSubmit = async () => {
        setError('')
        const validate =  validateEmail(email)
        if(!validate){
            setError('Email is not valid')
            return
        }
        
        try {
            await login({ variables: { identifier: email, password } })
        } catch (error) {
            console.error('error', error)
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
                    onChange={(e) => setEmail(e.target.value)}
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
