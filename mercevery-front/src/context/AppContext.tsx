import { createContext, useState } from "react";
import { ContextProps, defaultValue } from "../types/defaultValue";
import { UserAuth } from "../types/user/userAuth";

export const AppContext = createContext(defaultValue);

export const AppContextProvider: React.FC<ContextProps> = ({ children }) => {
  const [isAuth, setIsAuth] = useState<boolean>(false);
  const [jwt, setJwt] = useState<string>("");
  const [role_id, setRoleId] = useState<number | string>("");
  const [me, setMe] = useState<UserAuth>(defaultValue.me);

  const onAuthUser = (
    access_token: string,
    roleId: number | string,
    userInfo: UserAuth
  ) => {
    setIsAuth(true);
    setJwt(access_token);
    setRoleId(roleId);
    setMe(userInfo);
  };

  return (
    <AppContext.Provider
      value={{
        isAuth,
        onAuthUser,
        jwt,
        role_id,
        me,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
