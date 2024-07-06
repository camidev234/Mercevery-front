import { useContext } from "react"
import { Navigate, Outlet } from "react-router-dom";
import { ContextProps } from "../types/defaultValue";
import { AppContext } from "../context/AppContext";

export const GuestRoute : React.FC<ContextProps> = ({ children }) => {
    const { isAuth } = useContext(AppContext);

    if(isAuth) {
        return <Navigate to={'/home'}/>
    }

    return children ? children : <Outlet/>
}