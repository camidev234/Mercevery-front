import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
// import { LoadingSpinner } from "./LoadingSpinner";
import { ContextProps } from "../types/defaultValue";
import { AppContext } from "../context/AppContext";

export const ProtectedRoute : React.FC<ContextProps> = ({ children }) => {
  const { isAuth } = useContext(AppContext);

  //   useEffect(() => {
  //     console.log(userIsAuth);
  //   }, [userIsAuth]);

  if (!isAuth) {
    console.log(isAuth);
    return <Navigate to="/" />;
  }

  return children ? children : <Outlet/>
};