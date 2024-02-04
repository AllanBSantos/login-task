import { useEffect, useState } from "react";
import AuthContext from "../../context/AuthContext";
import { User } from "../../types/UserType";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/client";
import LoginMutation from "../../graphql/mutations/LoginMutation";
import { useCookies } from "react-cookie";


type AuthProviderPropsType = {
    children:JSX.Element;
};

const AuthProvider:React.FC<AuthProviderPropsType> = ({children} ) => {
    const [user, setUser] = useState<User | null>(null);
    const [loginMutation] = useMutation(LoginMutation);
    const navigate = useNavigate(); 
    const [cookies, setCookie, removeCookie] = useCookies();

    useEffect(() => {
         if(cookies['token']) {
          setUser({id: cookies['token'].id, token: cookies['token'].token})
         }
    }, [cookies]);

        const login = async ({email, password}: User) => {
            try {
                const response = await loginMutation({variables: {identifier: email, password}})
                if( response.data) {
                    setCookie('token',{ id: response.data.login.user.id , token: response.data.login.jwt}, {path: '/', secure: true, sameSite: true} )
                    navigate('/account')
                    setUser({id: response.data.login.user.id, token: response.data.login.jwt})
                    return {
                        data: response.data,
                        error: null
                    }
                }
             } catch (error : any) {
                return {
                    data: null,
                    error: error?.graphQLErrors[0]?.extensions?.exception?.data?.data[0].messages[0].message 
                    || error.message
                }
            }
           return null
        }
    const logout = () => {
        setUser(null)
        removeCookie('token')
        navigate('/login')
    };

    return (
        <AuthContext.Provider value= {{
         user,
         login,
         logout
         }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;
