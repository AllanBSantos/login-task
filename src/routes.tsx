import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Account from "./pages/Account";
import NotFound from "./pages/NotFound";
import RequireAuth from "./components/RequireAuth";

const Router = () => {
  return (
    <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/account" element={<RequireAuth><Account/></RequireAuth>} />
        <Route path="*"  element={<NotFound/>} />
    </Routes>
  );
}

export default Router;
