import { ReactNode } from "react";
export type UserContextProps = {
  user: UserSchema;
  setUser: (username: string, email: string, password: string) => void;
};

export type UserSchema = {
  username: string;
  email: string;
  password: string;
};

export type userContextProviderProps = {
  children: ReactNode;
};
