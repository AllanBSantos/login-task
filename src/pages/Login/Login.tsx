import {
    Container,
    Title,
    Label,
    FormContainer,
} from './Login.style';
import Input from '../../components/Input';
import Button from '../../components/Button';

const Login:React.FC = () => {
    return (
        <Container>
            <Title>USER LOGIN</Title>
            <FormContainer>
                <Label>Your Email</Label>
                <Input />
                <Label >Your Password</Label>
                <Input isPassword= {true}/>
                <Button onClick={() => {}}>Login</Button>
            </FormContainer>
        </Container>
    );
};

export default Login;
