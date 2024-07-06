import { ReactNode } from "react";
import { UserAuth } from "./user/userAuth";

type AppContextType = {
  isAuth: boolean;
  onAuthUser: (access_token: string, r: number | string, u: UserAuth) => void;
  jwt: string;
  role_id: string | number;
  me: UserAuth;
};

export const defaultValue: AppContextType = {
  isAuth: false,
  onAuthUser: () => {},
  jwt: "",
  role_id: "",
  me: {
    id: "",
    email: "",
    role: {
      id: "",
      role_name: "",
    },
    additional_information: {
      id: "",
      name: "",
      last_name: "",
      number_document: "",
      user_id: "",
      nit: "",
      company_name: "",
      principal_activity: "",
      createdAt: "",
      updatedAt: "",
      phone_number: "",
      email: "",
    },
  },
};

export interface ContextProps {
  children: ReactNode;
}
