import { ReactNode } from "react"

type AppContextType = {
    isAuth: boolean,
    onAuthUser: (access_token: string, r: number | string) => void,
    jwt: string,
    role_id: string | number
}

export const defaultValue :AppContextType = {
    isAuth: false,
    onAuthUser: () => {},
    jwt: "",
    role_id: ""
}

export interface ContextProps {
    children: ReactNode
}