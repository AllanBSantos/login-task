import { useEffect, useState } from "react";
import AuthContext from "../../context/AuthContext";
import { User } from "../../types/UserType";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/client";
import LoginMutation from "../../graphql/mutations/LoginMutation";

type AuthProviderPropsType = {
    children:JSX.Element;
};

const AuthProvider:React.FC<AuthProviderPropsType> = ({children} ) => {
    const [user, setUser] = useState<User | null>(null);
    const [loginMutation] = useMutation(LoginMutation);
    const navigate = useNavigate(); 

    useEffect(() => {
        const token = document.cookie.split('; ').find(row => row.startsWith('token='))
        if(token){
            const jwt = token.split('=')[1]
            if(jwt){
                setUser({token: jwt})
            }
        }
    }, []);

        const login = async ({email, password}: User) => {
            try {
                const response = await loginMutation({variables: {identifier: email, password}})
                if( response.data) {
                    document.cookie = `token=${response.data.jwt}; Secure; SameSite=Strict;`
                    navigate('/account')
                    setUser(response.data)
                    return {
                        data: response.data,
                        error: null
                    }
                }
             } catch (error : any) {
                return {
                    data: null,
                    error: error.graphQLErrors[0]?.extensions?.exception?.data?.data[0].messages[0].message 
                    || error.message
                }
            }
           return null
        }
    const logout = () => {
        setUser(null)
        document.cookie = 'token=; Secure; SameSite=Strict;'
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
