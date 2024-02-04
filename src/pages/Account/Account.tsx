import React, { useContext, useEffect } from 'react';
import { 
    Card,
    Container, 
    FakeAvatar, 
    CoverContainer,
    Label, 
    LabelRow, 
    LabelContainer, 
    LogoutButton,
    Footer, 
} from './Account.style';
import AuthContext from '../../context/AuthContext/AuthContext';
import ReactLoading from 'react-loading';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import getUserQuery from '../../graphql/queries/getUserQuery';
import { useTranslation } from 'react-i18next';

const Account:React.FC = () => {

    const auth = useContext(AuthContext);
    const navigate = useNavigate();
    const { loading, error, data } = useQuery(getUserQuery , {
        variables: { id: auth.user?.id },
        context: {
            headers: {
              authorization: `Bearer ${auth.user?.token}`
            }
          }
    });
    const { t } = useTranslation();

    useEffect(() => {
        if (!auth.user) {
            navigate('/')
        }
    }, [auth.user, navigate, data, error]);  
    
    const handleLogout = () => {
        auth.logout();
        navigate('/');
    }

    const user = data?.user;
    const { firstName, lastName } = user || { firstName: '', lastName: ''};

    return (
        <Card>
            {
            loading ? <ReactLoading color='#2d21de' type='spin' height={40} width={40} /> :    
            <Container>
              <CoverContainer/>
                <FakeAvatar
                    name={`${firstName} ${lastName}`}
                    size="100"
                    round
                />
                <LabelContainer>
                    <LabelRow>
                        <Label>{t('First name:')}</Label>
                        <Label>{firstName}</Label>
                    </LabelRow>
                    <LabelRow>
                        <Label>{t('Last name:')}</Label>
                        <Label>{lastName}</Label>
                    </LabelRow>
                </LabelContainer>
                <Footer>
                    <LogoutButton onClick={handleLogout} >{t('Logout')}</LogoutButton>
                </Footer>       
            </Container>}
        </Card>
    );
};
export default Account;
