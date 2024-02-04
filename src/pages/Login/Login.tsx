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
import { useTranslation } from 'react-i18next';

const Login:React.FC = () => {
    const [email, setEmail] = React.useState<string>('');
    const [password, setPassword] = React.useState<string>('');
    const [error, setError] = React.useState<string>('');
    const [loading, setLoading] = React.useState<boolean>(false);
    const auth = useContext(AuthContext);
    const { t } = useTranslation();

    const validateFields = () => {
        const validEmail =  validateEmail(email)
        if(!email || !password){
            setError(t('Please fill your email and password'))
            return false
        }
        if(!validEmail){
            setError(t('Email is not valid'))
            return false
        }
        return true
    }

    const handleSubmit = async () => {
        setError('')
       if(!validateFields() ) return 
       setLoading(true)
        try {
          const result = await auth.login({email, password})
            if(result?.error){
                setError(t(`${result.error}`))
            }
        } catch (error) {
            console.error('error', error)
        } finally {
            setLoading(false)
        }
    }

    return (
        <Container>
            <Title>{t('USER LOGIN')}</Title>
            <FormContainer  onSubmit={e => {
                e.preventDefault();
                handleSubmit()
                }}>
                <Label>{t('Your Email')}</Label>
                <Input
                    dataTestId="email-input"
                    value={email}
                    onChange={(e) => { setError(''); setEmail(e.target.value)}}
                    validateCallback={() => validateEmail(email)}
                />
                <Label>{t('Your Password')}</Label>
                <Input
                    dataTestId="password-input"
                    isPassword= {true}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}    
                />
                <Button type="submit" loading={loading} >{t('Login')}</Button>
            </FormContainer>
           { error &&  <ErrorLabel>{error}</ErrorLabel>}
        </Container>
    );
};

export default Login;
