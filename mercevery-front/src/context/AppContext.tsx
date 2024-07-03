import { createContext, useState } from "react"
import { ContextProps, defaultValue } from "../types/defaultValue";

export const AppContext = createContext(defaultValue);

export const AppContextProvider : React.FC<ContextProps> = ({children}) => {

    const [isAuth, setIsAuth] = useState<boolean>(false);
    const [jwt, setJwt] = useState<string>("");

    const onAuthUser = (access_token: string) => {
        setIsAuth(true);
        setJwt(access_token);
    }   

    return (
        <AppContext.Provider 
            value={{
                isAuth,
                onAuthUser,
                jwt,
            }}
        >
            {children}
        </AppContext.Provider>
    )
}