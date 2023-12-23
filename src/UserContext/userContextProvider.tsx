import React, { createContext, useState } from "react";
import {
  UserContextProps,
  userContextProviderProps,
  UserSchema,
} from "../models/userContextModels";

export const UserContext = createContext<UserContextProps | null>(null);

export const UserContextProvider = ({ children }: userContextProviderProps) => {
  const [user, setUser] = useState<UserSchema>({
    username: "",
    email: "",
    password: "",
  });

  const contextValue: UserContextProps | null = {
    user,
    setUser: (username: string, email: string, password: string) => {
      setUser((prevUser) => ({
        ...prevUser,
        username,
        email,
        password,
      }));
    },
  };

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};
