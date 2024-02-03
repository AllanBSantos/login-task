import { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import Login from "../../pages/Login";

type RequireAuthProps = {
    children: JSX.Element;
  };

const RequireAuth = ({children}: RequireAuthProps) => {

  const Auth = useContext(AuthContext);

  if ( !Auth ||  !Auth.user) {
  return <Login />;
  };

    return children;
  };
  
  export default RequireAuth;
