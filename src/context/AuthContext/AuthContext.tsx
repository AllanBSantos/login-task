import { createContext } from "react";
import { AuthContextType } from "../../types/AuthContextType";


const AuthContext = createContext<AuthContextType>(null!)
export default AuthContext;
