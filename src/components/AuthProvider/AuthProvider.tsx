import { useState } from "react";
import AuthContext from "../../context/AuthContext";
import { User } from "../../types/UserType";

type AuthProviderPropsType = {
    children:JSX.Element;
};

const AuthProvider:React.FC<AuthProviderPropsType> = ({children} ) => {
    const [user, setUser] = useState<User | null>(null);
    const login = (user: User) => {

        return {
            status: 200,
            token: '12345'
        }

    }
    const logout = () => setUser(null);

    return (
        <AuthContext.Provider value= {{user, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;
