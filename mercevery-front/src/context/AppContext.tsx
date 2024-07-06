import { createContext, useEffect, useState } from "react";
import { ContextProps, defaultValue } from "../types/defaultValue";
import { UserAuth } from "../types/user/userAuth";
import Cookies from "js-cookie";

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
    Cookies.set("jwt_token", access_token, { expires: 2 });
    Cookies.set("user_auth_info", JSON.stringify(userInfo), { expires: 2 });
    Cookies.set("isAuth", "true", { expires: 2 });
  };

  useEffect(() => {
    const tokenFromCookie = Cookies.get("jwt_token");
    const userFromCookie = Cookies.get("user_auth_info");
    const isAuthCookie = Cookies.get("isAuth");
    if (tokenFromCookie && userFromCookie && isAuthCookie) {
      const state = isAuthCookie === "true";
      setIsAuth(state);
      setJwt(tokenFromCookie);
      setMe(JSON.parse(userFromCookie));
      setRoleId(JSON.parse(userFromCookie).role.id)
    }
  }, []);

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
