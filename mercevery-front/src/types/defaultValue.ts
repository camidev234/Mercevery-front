import { ReactNode } from "react"

type AppContextType = {
    isAuth: boolean,
    onAuthUser: (access_token: string) => void,
    jwt: string
}

export const defaultValue :AppContextType = {
    isAuth: false,
    onAuthUser: () => {},
    jwt: ""
}

export interface ContextProps {
    children: ReactNode
}