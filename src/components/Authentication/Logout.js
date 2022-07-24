import { Navigate } from "react-router-dom";
import * as authService from "../../services/authService.js";

export const Logout = ({
    onLogout
}) => {
    authService.logout();
    onLogout();

    return <Navigate to="/" replace={true} />;
};

export default Logout;