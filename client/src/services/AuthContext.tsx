import { createContext, type Dispatch, type SetStateAction } from "react";

interface AuthContextType {
  isLoggedIn: boolean;
  loggedInUser: string;
  setLoggedIn: Dispatch<SetStateAction<boolean>>;
  setLoggedInUser: Dispatch<SetStateAction<string>>;
}
export const AuthContext = createContext<AuthContextType>(
  {} as AuthContextType
);
