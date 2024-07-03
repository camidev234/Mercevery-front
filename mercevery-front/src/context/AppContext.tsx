import { createContext, useState } from "react"
import { ContextProps, defaultValue } from "../types/defaultValue";

export const AppContext = createContext(defaultValue);

export const AppContextProvider : React.FC<ContextProps> = ({children}) => {

    const [isAuth, setIsAuth] = useState<boolean>(false);
    const [jwt, setJwt] = useState<string>("");
    const [role_id, setRoleId] = useState<number | string>("");

    const onAuthUser = (access_token: string, roleId:number | string) => {
        setIsAuth(true);
        setJwt(access_token);
        setRoleId(roleId);
    }   

    return (
        <AppContext.Provider 
            value={{
                isAuth,
                onAuthUser,
                jwt,
                role_id
            }}
        >
            {children}
        </AppContext.Provider>
    )
}